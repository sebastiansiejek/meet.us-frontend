import React, { useEffect, useState } from 'react';
import EventCards from 'src/components/Events/EventCards';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchBar from 'src/components/SearchBar';
import { Event } from 'src/generated/gqlQueries';
import { useSearchEventsQuery } from 'src/generated/gqlQueries';

export interface EventsWithSearchProps {
  initSearchQuery: string;
}

const EventsWithSearch: React.FunctionComponent<EventsWithSearchProps> = ({
  initSearchQuery,
}) => {
  const Option = Select.Option;

  const { t } = useTranslation();

  const [countOfEvents, setCountOfEvents] = useState(12);
  const [orderField, setOrderField] = useState('startDate');
  const [orderSort, setOrderSort] = useState('ASC');
  const [isArchive, setArchive] = useState(false);

  const { data, isLoading } = useSearchEventsQuery({
    first: countOfEvents,
    query: initSearchQuery,
    orderField,
    orderSort,
    isArchive,
  });

  const sortChangeHandler = (value: string) => {
    if (value === 'latest') {
      setOrderField('startDate');
      setOrderSort('DESC');
      setArchive(true);
    }

    if (value === 'closest') {
      setOrderField('startDate');
      setOrderSort('ASC');
      setArchive(false);
    }
  };

  return (
    <>
      {data?.searchBar.page.edges && (
        <div>
          <SearchBar value={`${initSearchQuery}`} />
          <div className="flex flex-col mt-12">
            <Select
              onChange={sortChangeHandler}
              style={{ width: 200 }}
              placeholder={t('Sortuj')}
              className="ml-auto"
              loading={isLoading}
              defaultValue="closest"
            >
              <Option value="latest">{t('Latest events')}</Option>
              <Option value="closest">{t('Upcoming events')}</Option>
            </Select>
            <div>
              <EventCards
                events={data.searchBar.page.edges as [{ node: Event }]}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsWithSearch;
