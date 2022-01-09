import Container from 'src/components/Container';
import React, { useMemo } from 'react';
import UserCard from 'src/components/User/UserCard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Card, Col, Row, Typography, Spin, Button } from 'antd';
import {
  ClockCircleTwoTone,
  UsergroupAddOutlined,
  CalendarTwoTone,
  PushpinTwoTone,
} from '@ant-design/icons';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import { getDateReadableFormat } from 'src/utils/date';
import EventParticipateActions from '../../EventParticipateActions/EventParticipateActions';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { google } from 'calendar-link';

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
      id,
      eventAddress,
    },
  } = data;

  const { firstName, lastname, nickname } = user;

  const startDateFormat = getDateReadableFormat(startDate, i18n.language);
  const endDateFormat = getDateReadableFormat(endDate, i18n.language);
  dayjs.extend(relativeTime);
  const isActive = dayjs(endDate).diff(dayjs()) > 0 ? true : false;

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
            <Paragraph className="flex items-center">
              <ClockCircleTwoTone className="mr-3" />
              {fromNow}
            </Paragraph>
            {isLogged && isActive && (
              <div className="mt-10 mb-4">
                <EventParticipateActions eventId={id} />
              </div>
            )}
          </Card>
        </Col>
        <Col span={24} md={8} className="mt-7">
          <Card className="w-full">
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
            {eventAddress && (
              <Paragraph className="flex items-center">
                <PushpinTwoTone className="mr-3" />
                {eventAddress.label}
              </Paragraph>
            )}
            <a
              href={google({
                title,
                description: `${description}\n\n${window.location.href}`,
                start: startDate,
                end: endDate,
                location: eventAddress?.label || '',
              })}
              rel="nofollow noreferrer"
              target={'_blank'}
            >
              <Button>{t('Add to google calendar')}</Button>
            </a>
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
              id={user.id}
            />
          </Col>
        </Row>
      )}
      {lat > 0 && lng > 0 && (
        <div className="mt-10">
          <SingleEventMap {...data.event} />
        </div>
      )}
    </Container>
  );
};

export default Event;
