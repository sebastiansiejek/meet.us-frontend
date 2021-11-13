import CardLink from 'src/components/CardLink';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import { CalendarTwoTone } from '@ant-design/icons';
import { Card, Divider, Typography } from 'antd';
import { Event } from 'src/generated/gqlQueries';
import { getExcerpt } from 'src/utils/excerpt';
import { useTranslation } from 'react-i18next';
import { routes } from 'src/routes/routes';

const { Paragraph } = Typography;

export interface EventHorizontalProps {
  event: Partial<Event>;
}

const EventHorizontal: React.FunctionComponent<EventHorizontalProps> = ({
  event,
}) => {
  const { title, description, id, startDate, endDate, type, state } = event;
  const { Meta } = Card;
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { t } = useTranslation();

  dayjs.extend(relativeTime);
  dayjs.extend(duration);

  const fromNow = dayjs(startDate).locale(language).fromNow();
  const during = dayjs
    .duration(dayjs().diff(endDate))
    .locale(language)
    .humanize();

  return (
    <CardLink
      linkProps={{
        href: `${routes.events.href}/${id}`,
        passHref: true,
      }}
      cardProps={{
        title: (
          <>
            <div className="mb-2 font-normal lowercase">
              {type === 0 && <Paragraph>{t('Sport')}</Paragraph>}
              {type === 1 && <Paragraph>{t('Party')}</Paragraph>}
              {type === 2 && <Paragraph>{t('Chatting')}</Paragraph>}
            </div>
            {title}
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
              {state !== 'DURING' && fromNow}
            </time>
          </div>
        </div>
      )}
    </CardLink>
  );
};

export default EventHorizontal;
