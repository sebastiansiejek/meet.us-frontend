import React, { useEffect, useState } from 'react';
import EventCards from 'src/components/Events/EventCards';
import { Col, Row, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import SearchBar from 'src/components/SearchBar';
import { Event } from 'src/generated/gqlQueries';
import { useEventsQuery } from 'src/generated/gqlQueries';
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from 'src/components/Container';
import EventCardSkeleton from '../EventCardSkeleton';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import EventHorizontal from '../EventHorizontal';

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
  const [layout, setLayout] = useState<'list' | 'grid'>('grid');

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
      {events && (
        <div className="flex flex-col mt-12">
          <div className="flex flex-wrap flex-col md:items-center md:flex-row">
            <div>
              <Select
                onChange={sortByStateHandler}
                placeholder={t('Select status of events')}
                className="ml-auto w-full md:w-2/5"
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
                placeholder={t('Select status of events')}
                className="ml-auto w-full md:w-2/5"
                loading={isLoading}
                defaultValue={orderSort}
                value={orderSort}
              >
                <Option value="ASC">{t('Ascending by start date')}</Option>
                <Option value="DESC">{t('Descending by start date')}</Option>
              </Select>
            </div>
            <div className="md:ml-auto space-x-2">
              <UnorderedListOutlined onClick={() => setLayout('list')} />
              <TableOutlined onClick={() => setLayout('grid')} />
            </div>
          </div>
          <div>
            <InfiniteScroll
              style={{
                overflow: 'hidden',
              }}
              loader={
                <Container>
                  <Row gutter={16}>
                    {new Array(12).fill(0).map((_, index) => (
                      <Col key={index} span={24} sm={12} lg={8}>
                        <Space
                          direction={'vertical'}
                          size={8}
                          className="w-full"
                        >
                          <EventCardSkeleton />
                        </Space>
                      </Col>
                    ))}
                  </Row>
                </Container>
              }
              next={getMoreEvents}
              hasMore={isNextPage}
              dataLength={events.length}
            >
              {layout === 'grid' && (
                <EventCards events={events as [{ node: Event }]} />
              )}
              {layout === 'list' && (
                <Container>
                  <Row gutter={16}>
                    {events.map(({ node }) => (
                      <Col key={node.id} span={24}>
                        <Space
                          direction={'vertical'}
                          size={8}
                          className="w-full"
                        >
                          <EventHorizontal event={node} />
                        </Space>
                      </Col>
                    ))}
                  </Row>
                </Container>
              )}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsWithSearch;
