import { CalendarTwoTone } from '@ant-design/icons';
import { Button, Spin, Table, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFindUserEventsQuery } from 'src/generated/gqlQueries';
import { getDateReadableFormat } from 'src/utils/date';
import { getExcerpt } from 'src/utils/excerpt';

export interface UserEventsProps {}

const UserEvents: React.FunctionComponent<UserEventsProps> = ({}) => {
  const { isLoading, data, isError } = useFindUserEventsQuery();
  const { t, i18n } = useTranslation();

  return (
    <>
      {isError && isLoading && <Spin />}
      {data && (
        <>
          <Typography.Title level={2}>{t('Created events')}</Typography.Title>
          <Table
            dataSource={data.findUserEvents}
            rowKey="id"
            columns={[
              {
                title: t('Event name'),
                dataIndex: 'title',
              },
              {
                title: t('Description'),
                dataIndex: 'description',
                render: (value: string) => getExcerpt(value, 30),
              },
              {
                title: () => (
                  <div className="flex items-center">
                    <CalendarTwoTone className="mr-1" />
                    {t('Start')}
                  </div>
                ),
                dataIndex: 'startDate',
                render: (value: string) =>
                  getDateReadableFormat(value, i18n.language),
              },
              {
                title: () => (
                  <div className="flex items-center">
                    <CalendarTwoTone className="mr-1" />
                    {t('End')}
                  </div>
                ),
                dataIndex: 'endDate',
                render: (value: string) =>
                  getDateReadableFormat(value, i18n.language),
              },
              {
                title: t('Zobacz'),
                dataIndex: 'id',
                render: (id: string) => (
                  <Link href={`/events/${id}`} passHref>
                    <a href="">
                      <Button type="primary">{t('See more')}</Button>
                    </a>
                  </Link>
                ),
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default UserEvents;
