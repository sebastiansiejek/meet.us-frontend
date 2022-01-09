import Link from 'next/link';
import React from 'react';
import {
  Button,
  Spin,
  Table,
  Typography,
  Popconfirm,
  notification,
} from 'antd';
import { CalendarTwoTone } from '@ant-design/icons';
import { getDateReadableFormat } from 'src/utils/date';
import { getExcerpt } from 'src/utils/excerpt';
import {
  useDeleteEventMutation,
  useFindUserEventsQuery,
} from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import EventModal from '../Events/EventModal';
import { useQueryClient } from 'react-query';
import { routes } from 'src/routes/routes';

export interface UserEventsProps {
  userId: string;
}

const UserEvents: React.FunctionComponent<UserEventsProps> = ({ userId }) => {
  const { isLoading, data, isError } = useFindUserEventsQuery({
    userId,
  });
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const deleteEventMutation = useDeleteEventMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('FindUserEvents');
      notification.success({
        message: t('Event has been removed'),
      });
    },
  });

  const events = data && data.userEvents?.page?.edges?.map((edge) => edge.node);

  return (
    <>
      {isError && isLoading && <Spin />}
      {events && (
        <>
          <Typography.Title level={2}>{t('Created events')}</Typography.Title>
          <Table
            dataSource={events as []}
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
                title: t('See more'),
                dataIndex: 'id',
                render: (id: string) => (
                  <Link href={`${routes.events.href}/${id}`} passHref>
                    <a href="">
                      <Button type="primary">{t('See')}</Button>
                    </a>
                  </Link>
                ),
              },
              {
                title: t('Edit'),
                dataIndex: 'id',
                render: (id: string) => <EventModal isEdit id={id} />,
              },
              {
                title: t('Remove'),
                dataIndex: 'id',
                render: (id: string) => (
                  <Popconfirm
                    placement="top"
                    title={t('Are you sure?')}
                    okText={t('Yes')}
                    cancelText={t('No')}
                    okButtonProps={{
                      loading: deleteEventMutation.isLoading,
                    }}
                    onConfirm={() => {
                      deleteEventMutation.mutate({
                        id,
                      });
                    }}
                  >
                    <Button danger>{t('Remove')}</Button>
                  </Popconfirm>
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
