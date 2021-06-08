import CardLink from 'src/components/CardLink';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { CalendarTwoTone } from '@ant-design/icons';
import { Card, Divider } from 'antd';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';
import { useTranslation } from 'react-i18next';

export interface EventCardProps {
  event: Partial<Event>;
}

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description, id, startDate } = event;
  const { Meta } = Card;
  const { i18n } = useTranslation();

  dayjs.extend(relativeTime);

  const fromNow = dayjs(startDate).locale(i18n.language).fromNow();

  return (
    <CardLink
      linkProps={{
        href: `events/${id}`,
        passHref: true,
      }}
      cardProps={{
        title,
      }}
    >
      {description && <Meta description={getExcerpt(description, 50)}></Meta>}
      {fromNow && (
        <div>
          <Divider />
          <div className="flex items-center">
            <CalendarTwoTone className="mr-3" />
            <time>{fromNow}</time>
          </div>
        </div>
      )}
    </CardLink>
  );
};

export default EventCard;
