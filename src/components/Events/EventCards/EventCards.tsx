import EventCard from '../EventCard/EventCard';
import React from 'react';
import { Col, Row, Space } from 'antd';
import { Event } from 'src/generated/gqlQueries';
import Container from 'src/components/Container';

export interface EventCardProps {
  events: [{ node: Event }];
}

const EventsCard: React.FunctionComponent<EventCardProps> = ({ events }) => {
  return (
    <Container>
      <Row gutter={16}>
        {events.map(({ node }) => (
          <Col key={node.id} span={24} sm={12} lg={8}>
            <Space direction={'vertical'} size={8} className="w-full">
              <EventCard event={node} />
            </Space>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsCard;
