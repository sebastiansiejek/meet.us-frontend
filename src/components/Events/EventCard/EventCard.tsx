import { Card } from 'antd';
import React from 'react';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';

export interface EventCardProps {
  event: Partial<Event>;
}

const { Meta } = Card;

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description } = event;

  return (
    <Card title={title}>
      {description && <Meta description={getExcerpt(description, 50)}></Meta>}
    </Card>
  );
};

export default EventCard;
