import { Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';

export interface EventCardProps {
  event: Partial<Event>;
}

const { Meta } = Card;

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description, id } = event;

  return (
    <Link href={`events/${id}`}>
      <a>
        <Card title={title}>
          {description && (
            <Meta description={getExcerpt(description, 50)}></Meta>
          )}
        </Card>
      </a>
    </Link>
  );
};

export default EventCard;
