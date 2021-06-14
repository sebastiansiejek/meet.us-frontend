import React, { useEffect, useState } from 'react';
import EventCards from 'src/components/Events/EventCards';
import { Select, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchBar from 'src/components/SearchBar';
import { Event } from 'src/generated/gqlQueries';
import { useSearchEventsQuery } from 'src/generated/gqlQueries';
import InfiniteScroll from 'react-infinite-scroll-component';

export interface EventsWithSearchProps {
  initSearchQuery: string;
}

const EventsWithSearch: React.FunctionComponent<EventsWithSearchProps> = ({
  initSearchQuery,
}) => {
  const Option = Select.Option;

  const { t } = useTranslation();

  const [orderField, setOrderField] = useState('startDate');
  const [orderSort, setOrderSort] = useState('ASC');
  const [status, setEventStatus] = useState('DURING');

  const [endCursor, setEndCursor] = useState('');
  const [isNextPage, setIsNextPage] = useState(true);
  const [events, setEvents] = useState<Array<any>>([]);

  const { data, isLoading } = useSearchEventsQuery({
    first: 12,
    query: initSearchQuery,
    orderField,
    orderSort,
    status: status,
    after: endCursor,
  });

  const sortByStatusHandler = (value: string) => {
    setEventStatus(value);
    setEndCursor('');
  };

  const sortChangeHandler = (value: string) => {
    setOrderSort(value);
    setOrderField('startDate');
  };

  useEffect(() => {
    if (data) {
      if (endCursor === '') {
        setEvents([...(data.searchBar.page.edges as [{ node: Event }])]);
        setIsNextPage(data.searchBar.page.pageInfo?.hasNextPage || false);
      }

      if (endCursor !== '') {
        setEvents([
          ...events,
          ...(data.searchBar.page.edges as [{ node: Event }]),
        ]);
      }
    }
  }, [data, endCursor]);

  const getMoreEvents = () => {
    if (data) {
      setEndCursor(data.searchBar.page.pageInfo?.endCursor || '');
      setIsNextPage(data.searchBar.page.pageInfo?.hasNextPage || false);
    }
  };

  return (
    <>
      <SearchBar value={`${initSearchQuery}`} />
      {events && events.length >= 1 && (
        <div className="flex flex-col mt-12">
          <div className="flex">
            <Select
              onChange={sortByStatusHandler}
              style={{ width: 200 }}
              placeholder={t('Select status of events')}
              className="ml-auto"
              loading={isLoading}
              defaultValue="DURING"
            >
              <Option value="FUTURE">{t('Upcoming')}</Option>
              <Option value="DURING">{t('During')}</Option>
              <Option value="PAST">{t('Past')}</Option>
            </Select>
            <Select
              onChange={sortChangeHandler}
              style={{ width: 200 }}
              placeholder={t('Select status of events')}
              className="ml-auto"
              loading={isLoading}
              defaultValue="ASC"
            >
              <Option value="ASC">{t('Ascending by start date')}</Option>
              <Option value="DESC">{t('Descending by start date')}</Option>
            </Select>
          </div>
          <div>
            <InfiniteScroll
              style={{
                overflow: 'hidden',
              }}
              loader={
                <div className="flex justify-center mt-10">
                  <Spin />
                </div>
              }
              next={getMoreEvents}
              hasMore={isNextPage}
              dataLength={events.length}
            >
              <EventCards events={events as [{ node: Event }]} />
            </InfiniteScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsWithSearch;
