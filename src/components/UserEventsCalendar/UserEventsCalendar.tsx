import Link from 'next/link';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Calendar, Tag, TagProps } from 'antd';
import { eventsTypes, participateTypes } from 'src/utils/events';
import { routes } from 'src/routes/routes';
import { useUserEventsCalendarQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'next-i18next';

export interface UserEventsCalendarProps {
  userId: string;
}

const UserEventsCalendar = ({ userId }: UserEventsCalendarProps) => {
  const format = 'YYYY-MM-DD HH:mm:ss';
  const startDate = dayjs().startOf('month');
  const endDate = dayjs().endOf('month');
  const [dates, setDates] = useState({
    startDate: startDate.format(format),
    endDate: endDate.format(format),
  });
  const userEventsCalendarQuery = useUserEventsCalendarQuery({
    startDate: dates.startDate,
    endDate: dates.endDate,
    userId: userId,
  });
  const { t } = useTranslation();
  const edges = userEventsCalendarQuery?.data?.userEventsCalendar.page.edges;

  const getTagColor = (participateType?: number | null): TagProps['color'] => {
    if (participateType === 0) return 'red';
    if (participateType === 1) return 'blue';
    if (participateType === 2) return 'green';
    return '';
  };

  return (
    <div>
      <Calendar
        dateCellRender={(value) => {
          const event = edges?.find(({ node }) => {
            if (node) {
              const startDate = dayjs(node.startDate);
              return startDate.isSame(dayjs(value.format(format)), 'day');
            }
          });

          if (event?.node) {
            const { title, id, type, loggedInParticipants } = event.node;
            const eventType = eventsTypes[type];

            return (
              <Link href={routes.events.href + '/' + id} passHref>
                <a className="block">
                  <Tag color={getTagColor(loggedInParticipants?.type) || ''}>
                    <div className="flex items-center">
                      {eventType && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={eventType.icon}
                          alt={eventType.name}
                          width={15}
                          height={15}
                        />
                      )}
                      <span>{title}</span>
                    </div>
                  </Tag>
                </a>
              </Link>
            );
          }

          return <></>;
        }}
        onPanelChange={(date) => {
          setDates({
            startDate: date.startOf('month').format(format),
            endDate: date.endOf('month').format(format),
          });
        }}
      />
      <div>
        {participateTypes.map(({ id, name }) => (
          <Tag key={id} color={getTagColor(id)}>
            {t(name)}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default UserEventsCalendar;
