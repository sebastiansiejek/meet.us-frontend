import React, { useEffect, useState } from 'react';
import EventCards from 'src/components/Events/EventCards';
import { Select, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchBar from 'src/components/SearchBar';
import { Event } from 'src/generated/gqlQueries';
import { useEventsQuery } from 'src/generated/gqlQueries';
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
  const [orderSort, setOrderSort] = useState('DESC');
  const [state, setEventState] = useState('DURING');

  const [endCursor, setEndCursor] = useState('');
  const [isNextPage, setIsNextPage] = useState(true);
  const [events, setEvents] = useState<Array<any>>([]);

  const { data, isLoading } = useEventsQuery({
    first: 12,
    query: initSearchQuery,
    orderField,
    orderSort,
    state,
    after: endCursor,
  });

  const sortByStateHandler = (value: string) => {
    setEventState(value);

    if (value === 'FUTURE') {
      setOrderSort('ASC');
    }

    if (value === 'PAST') {
      setOrderSort('DESC');
    }

    setEndCursor('');
  };

  const sortChangeHandler = (value: string) => {
    setOrderSort(value);
    setOrderField('startDate');
    setEndCursor('');
  };

  useEffect(() => {
    if (data) {
      if (endCursor === '') {
        setEvents([...(data.events.page.edges as [{ node: Event }])]);
      }

      if (endCursor !== '') {
        setEvents([
          ...events,
          ...(data.events.page.edges as [{ node: Event }]),
        ]);
      }

      setIsNextPage(data.events.page.pageInfo?.hasNextPage || false);
    }
  }, [data, endCursor]);

  const getMoreEvents = () => {
    if (data) {
      setEndCursor(data.events.page.pageInfo?.endCursor || '');
      setIsNextPage(data.events.page.pageInfo?.hasNextPage || false);
    }
  };

  return (
    <>
      <SearchBar value={`${initSearchQuery}`} />
      {events && events.length >= 1 && (
        <div className="flex flex-col mt-12">
          <div className="flex">
            <Select
              onChange={sortByStateHandler}
              style={{ width: 200 }}
              placeholder={t('Select status of events')}
              className="ml-auto"
              loading={isLoading}
              defaultValue={state}
              value={state}
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
              defaultValue={orderSort}
              value={orderSort}
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
