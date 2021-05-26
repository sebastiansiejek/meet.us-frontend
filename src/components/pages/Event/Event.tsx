import Container from 'src/components/Container';
import React from 'react';
import UserCard from 'src/components/User/UserCard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Card, Col, Row, Typography } from 'antd';
import {
  ClockCircleTwoTone,
  UsergroupAddOutlined,
  CalendarTwoTone,
} from '@ant-design/icons';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
export interface EventProps {
  data: SingleEventPageQuery;
}

const Event: React.FunctionComponent<EventProps> = ({ data }) => {
  const { Title, Paragraph } = Typography;
  const { t } = useTranslation();

  const { event } = data;

  const {
    title,
    description,
    startDate,
    endDate,
    user,
    maxParticipants,
  } = event;

  const { firstName, lastname, nickname, id } = user;

  const startDateFormat = dayjs(startDate).format('D MMMM YYYY HH:MM');
  const endDateFormat = dayjs(endDate).format('D MMMM YYYY HH:MM');
  dayjs.extend(relativeTime);

  const fromNow = dayjs(startDate).fromNow();

  return (
    <Container>
      <Row gutter={16}>
        <Col span={24} md={16} className="mt-7">
          <Card className="h-full">
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Col>
        <Col span={24} md={8} className="mt-7">
          <Card className="w-full">
            <Paragraph className="flex items-center">
              <ClockCircleTwoTone className="mr-3" />
              {fromNow}
            </Paragraph>
            <Paragraph className="flex items-center">
              <CalendarTwoTone className="mr-3" />
              <div>
                <time>{startDateFormat}</time>
                <span> - </span>
                <time>{endDateFormat}</time>
              </div>
            </Paragraph>
            {maxParticipants && (
              <Paragraph className="flex items-center">
                <UsergroupAddOutlined className="mr-3 mb-0" />
                {t('Maximum members')}: {maxParticipants}
              </Paragraph>
            )}
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24} className="mt-7">
          <UserCard
            nickname={nickname}
            firstName={firstName}
            lastName={lastname}
            id={id}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
