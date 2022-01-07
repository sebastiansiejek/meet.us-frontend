import Container from 'src/components/Container';
import React, { useMemo } from 'react';
import UserCard from 'src/components/User/UserCard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Card, Col, Row, Typography, Spin } from 'antd';
import {
  ClockCircleTwoTone,
  UsergroupAddOutlined,
  CalendarTwoTone,
} from '@ant-design/icons';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import { getDateReadableFormat } from 'src/utils/date';
import EventParticipateActions from '../../EventParticipateActions/EventParticipateActions';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
export interface EventProps {
  data: SingleEventPageQuery;
}

const Event: React.FunctionComponent<EventProps> = ({ data }) => {
  const { Title, Paragraph } = Typography;
  const { t, i18n } = useTranslation();
  const session = useSession();
  const isLogged = session.data;

  const {
    event: {
      title,
      description,
      startDate,
      endDate,
      user,
      maxParticipants,
      lat,
      lng,
    },
  } = data;

  const { firstName, lastname, nickname, id } = user;

  const startDateFormat = getDateReadableFormat(startDate, i18n.language);
  const endDateFormat = getDateReadableFormat(endDate, i18n.language);
  dayjs.extend(relativeTime);

  const fromNow = dayjs(startDate).locale(i18n.language).fromNow();

  const SingleEventMap = useMemo(
    () =>
      dynamic(() => import('src/components/pages/Event/SingleEventMap'), {
        loading: () => <Spin />,
        ssr: false,
      }),
    [],
  );

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
      {firstName && lastname && nickname && (
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
      )}
      {lat > 0 && lng > 0 && (
        <div className="mt-10">
          <SingleEventMap {...data.event} />
        </div>
      )}
      {isLogged && (
        <div className="mt-10">
          <EventParticipateActions eventId={id} />
        </div>
      )}
    </Container>
  );
};

export default Event;
