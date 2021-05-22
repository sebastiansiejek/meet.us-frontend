import EventCard from '../EventCard/EventCard';
import React from 'react';
import { Col, Row, Space } from 'antd';
import { Event } from 'src/generated/gqlQueries';
import Container from 'src/components/Container';

export interface EventCardProps {
  events: Array<Event>;
}

const EventsCard: React.FunctionComponent<EventCardProps> = ({ events }) => {
  return (
    <Container>
      <Row gutter={16}>
        {events.map((event) => (
          <Col key={event.id} span={8}>
            <Space direction={'vertical'} size={8} style={{ width: '100%' }}>
              <EventCard event={event} />
            </Space>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsCard;
