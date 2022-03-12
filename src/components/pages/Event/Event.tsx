import Container from 'src/components/Container';
import React, { useMemo, useState } from 'react';
import UserCard from 'src/components/User/UserCard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Card, Col, Row, Typography, Spin, Button, Tooltip, Tag } from 'antd';
import {
  ClockCircleTwoTone,
  UsergroupAddOutlined,
  CalendarTwoTone,
  PushpinTwoTone,
  FacebookFilled,
  GoogleSquareFilled,
  TeamOutlined,
} from '@ant-design/icons';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import { getDateReadableFormat } from 'src/utils/date';
import EventParticipateActions, {
  ISetPeopleCountArgs,
} from '../../EventParticipateActions/EventParticipateActions';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { google } from 'calendar-link';
import { IEventParticipant } from 'src/types/IEvent';
import useFormattedBetweenDate from 'src/hooks/useFormattedBetweenDate';
import EventRating from './EventRating';
import { isNil } from 'lodash';
import useWindow from 'src/hooks/useWindow';
import EventViewsCount from 'src/components/EventViewsCount';

export interface EventProps {
  data: SingleEventPageQuery;
}

const Event: React.FunctionComponent<EventProps> = ({ data }) => {
  const { Title, Paragraph } = Typography;
  const { t, i18n } = useTranslation();
  const session: any = useSession();
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
      loggedInParticipants,
      goingCount,
      interestedCount,
      rate,
      participantRate,
      tags,
      visitCount,
    },
  } = data;

  const { firstName, lastname, nickname } = user;

  const startDateFormat = getDateReadableFormat(startDate, i18n.language);
  const endDateFormat = getDateReadableFormat(endDate, i18n.language);
  const dateBetween = useFormattedBetweenDate(startDate, endDate).date;
  dayjs.extend(relativeTime);
  const isActive = dayjs(endDate).diff(dayjs()) > 0 ? true : false;
  const fromNow = dayjs(startDate).locale(i18n.language).fromNow();
  const windowState = useWindow();

  const [goingCountState, setGoingCountState] = useState(goingCount || 0);
  const [interestedCountState, setInterestedCountState] = useState(
    interestedCount || 0,
  );

  const setPeopleCountHandler = (args: ISetPeopleCountArgs) => {
    setGoingCountState(args.goingCount || goingCount || 0);
    setInterestedCountState(args.interestedCount || interestedCount || 0);
  };

  const SingleEventMap = useMemo(
    () =>
      dynamic(() => import('src/components/pages/Event/SingleEventMap'), {
        loading: () => <Spin />,
        ssr: false,
      }),
    [],
  );

  const isShowRating =
    (!isActive && !!loggedInParticipants?.type) || (!isNil(rate) && rate > 0);

  return (
    <Container>
      <Row gutter={16}>
        <Col span={24} md={16} className="mt-7">
          <Card className="h-full">
            <Tag color={isActive ? 'green' : 'red'}>
              {isActive ? t('Active') : t('Archive')}
            </Tag>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <Paragraph className="flex items-center">
              <ClockCircleTwoTone className="mr-3" />
              {fromNow}
            </Paragraph>
            {tags && tags.length > 0 && (
              <div>
                {tags.map((tag: any, index: number) => (
                  <Tag key={index + tag.name}>{tag.name}</Tag>
                ))}
              </div>
            )}
            <div className="inline-grid grid-cols-2 gap-4 mt-5">
              {interestedCountState !== 0 && (
                <Paragraph className="flex items-center">
                  <Tooltip title={t('Interested')}>
                    <TeamOutlined className="mr-1" />
                    {interestedCountState}
                  </Tooltip>
                </Paragraph>
              )}
              {goingCountState !== 0 && (
                <Paragraph className="flex items-center">
                  <Tooltip title={t('Participants')}>
                    <UsergroupAddOutlined className="mr-1" />
                    {goingCountState}
                  </Tooltip>
                </Paragraph>
              )}
            </div>
            {isLogged && isActive && user.id !== session.data.user?.id && (
              <div className="mt-10 mb-4">
                <EventParticipateActions
                  setPeopleCount={setPeopleCountHandler}
                  eventId={id}
                  interestedCount={interestedCountState}
                  goingCount={goingCountState}
                  participantType={
                    loggedInParticipants?.type as IEventParticipant
                  }
                />
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
            <Paragraph className="flex items-center">
              <ClockCircleTwoTone className="mr-3" />
              {t('Duration')}: {dateBetween}
            </Paragraph>
            {maxParticipants && (
              <Paragraph className="flex items-center">
                <UsergroupAddOutlined className="mr-3 mb-0" />
                {t('Maximum members')}: {maxParticipants}
              </Paragraph>
            )}
            {visitCount > 0 && <EventViewsCount visitCount={visitCount} />}
            {eventAddress && (
              <Paragraph className="flex items-center">
                <PushpinTwoTone className="mr-3" />
                {eventAddress.label}
              </Paragraph>
            )}
            <a
              href={google({
                title,
                description: `${description}\n\n${windowState?.location.href}`,
                start: startDate,
                end: endDate,
                location: eventAddress?.label || '',
              })}
              rel="nofollow noreferrer"
              target={'_blank'}
              className="block"
            >
              <Button icon={<GoogleSquareFilled />}>
                {t('Add to google calendar')}
              </Button>
            </a>
            <a
              href={`https://www.facebook.com/sharer.php?u=${windowState?.location.href}`}
              rel="nofollow noreferrer"
              target={'_blank'}
              className="block mt-4"
            >
              <Button icon={<FacebookFilled />}>{t('Share')}</Button>
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
      {isShowRating && (
        <div className="mt-10">
          <EventRating
            rate={rate || 0}
            eventId={id}
            showInput={
              !isActive &&
              !!loggedInParticipants?.type &&
              !!participantRate === false
            }
          />
        </div>
      )}
    </Container>
  );
};

export default Event;
