import { Card } from 'antd';
import React from 'react';
import CardLink from 'src/components/CardLink';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';

export interface EventCardProps {
  event: Partial<Event>;
}

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description, id } = event;
  const { Meta } = Card;

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
    </CardLink>
  );
};

export default EventCard;
