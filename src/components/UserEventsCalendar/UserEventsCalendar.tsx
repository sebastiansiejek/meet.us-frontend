import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';
import { Calendar, Tag } from 'antd';
import { eventsTypes } from 'src/utils/events';
import { routes } from 'src/routes/routes';
import { useUserEventsCalendarQuery } from 'src/generated/gqlQueries';

export interface UserEventsCalendarProps {
  userId: string;
}

const UserEventsCalendar = ({ userId }: UserEventsCalendarProps) => {
  const format = 'YYYY-MM-DD HH:mm:ss';
  const startDate = dayjs().startOf('month');
  const endDate = dayjs().endOf('month');
  const userEventsCalendarQuery = useUserEventsCalendarQuery({
    startDate: startDate.format(format),
    endDate: endDate.format(format),
    userId: userId,
  });

  const edges = userEventsCalendarQuery?.data?.userEventsCalendar.page.edges;

  return (
    <Calendar
      dateCellRender={(value) => {
        const event = edges?.find(({ node }) => {
          if (node) {
            const startDate = dayjs(node.startDate);
            return startDate.isSame(dayjs(value.format(format)), 'day');
          }
        });

        if (event?.node) {
          const { title, id } = event.node;
          const eventType = eventsTypes[event.node.type];

          return (
            <Link href={routes.events.href + '/' + id} passHref>
              <a className="block">
                <Tag>
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
                    <span> {title}</span>
                  </div>
                </Tag>
              </a>
            </Link>
          );
        }

        return <></>;
      }}
      onPanelChange={(e) => console.log(e)}
    />
  );
};

export default UserEventsCalendar;
