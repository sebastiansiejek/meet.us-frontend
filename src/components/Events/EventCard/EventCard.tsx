import CardLink from 'src/components/CardLink';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import { CalendarTwoTone } from '@ant-design/icons';
import { Card, Divider } from 'antd';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';
import { useTranslation } from 'react-i18next';
import Party from '../../../assets/images/party.svg';
import Sport from '../../../assets/images/sport.svg';
import Conversation from '../../../assets/images/conversation.svg';
import { routes } from 'src/routes/routes';

export interface EventCardProps {
  event: Partial<Event>;
}

const EventCard: React.FunctionComponent<EventCardProps> = ({ event }) => {
  const { title, description, id, startDate, endDate, type, state } = event;
  const { Meta } = Card;
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { t } = useTranslation();

  dayjs.extend(relativeTime);
  dayjs.extend(duration);

  const fromNow = `${t('Start')} ${dayjs(startDate)
    .locale(language)
    .fromNow()}`;
  const past = `${dayjs(endDate).locale(language).fromNow()}`;
  const during = `${t('End')} ${dayjs(endDate).locale(language).fromNow()}`;

  return (
    <CardLink
      data-cy="event-card"
      linkProps={{
        href: `${routes.events.href}/${id}`,
        passHref: true,
      }}
      cardProps={{
        title,
        cover: (
          <>
            {type === 0 && <Sport />}
            {type === 1 && <Party />}
            {type === 2 && <Conversation />}
          </>
        ),
      }}
    >
      {description && <Meta description={getExcerpt(description, 50)}></Meta>}
      {fromNow && (
        <div>
          <Divider />
          <div className="flex items-center">
            <CalendarTwoTone className="mr-3" />
            <time>
              {state === 'DURING' && during}
              {state === 'FUTURE' && fromNow}
              {state === 'PAST' && past}
            </time>
          </div>
        </div>
      )}
    </CardLink>
  );
};

export default EventCard;
