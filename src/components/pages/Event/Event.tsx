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
        <Col
          span={24}
          md={16}
          style={{
            marginTop: '1.6rem',
          }}
        >
          <Card
            style={{
              height: '100%',
            }}
          >
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Col>
        <Col
          span={24}
          md={8}
          style={{
            marginTop: '1.6rem',
          }}
        >
          <Card
            style={{
              height: '100%',
            }}
          >
            <Paragraph>
              <ClockCircleTwoTone
                style={{
                  marginRight: '0.6rem',
                }}
              />
              {fromNow}
            </Paragraph>
            <Paragraph>
              <CalendarTwoTone
                style={{
                  marginRight: '0.6rem',
                }}
              />
              <time>{startDateFormat}</time>
              <span> - </span>
              <time>{endDateFormat}</time>
            </Paragraph>
            {maxParticipants && (
              <Paragraph>
                <UsergroupAddOutlined
                  style={{
                    marginRight: '0.6rem',
                  }}
                />
                {t('Maximum members')}: {maxParticipants}
              </Paragraph>
            )}
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col
          span={24}
          style={{
            marginTop: '1.6rem',
          }}
        >
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
