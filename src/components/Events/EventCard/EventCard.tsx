import { Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';
import styled from 'styled-components';

export interface EventCardProps {
  event: Partial<Event>;
}

const EventCardStyled = styled.a`
  display: block;
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description, id } = event;
  const { Meta } = Card;

  return (
    <Link href={`events/${id}`} passHref>
      <EventCardStyled>
        <Card title={title}>
          {description && (
            <Meta description={getExcerpt(description, 50)}></Meta>
          )}
        </Card>
      </EventCardStyled>
    </Link>
  );
};

export default EventCard;