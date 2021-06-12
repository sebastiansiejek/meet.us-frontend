import React from 'react';
import EventCards from 'src/components/Events/EventCards';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchBar from 'src/components/SearchBar';
import { Event, SearchEventsQuery } from 'src/generated/gqlQueries';

export interface EventsWithSearchProps {
  data: SearchEventsQuery;
  initSearchQuery: string;
}

const EventsWithSearch: React.FunctionComponent<EventsWithSearchProps> = ({
  data,
  initSearchQuery,
}) => {
  const Option = Select.Option;

  const { t } = useTranslation();

  return (
    <>
      {data?.searchBar.page.edges && (
        <div>
          <SearchBar value={`${initSearchQuery}`} />
          <div className="flex flex-col mt-12">
            <Select
              style={{ width: 200 }}
              placeholder={t('Sortuj')}
              className="ml-auto"
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
