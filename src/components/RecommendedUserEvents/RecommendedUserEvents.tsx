import { Typography } from 'antd';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useRecommendedUserEventsQuery } from 'src/generated/gqlQueries';
import EventCard from '../Events/EventCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export interface RecommendedUserEventsProps {}

const RecommendedUserEvents: React.FunctionComponent<RecommendedUserEventsProps> =
  ({}) => {
    const session: any = useSession();
    const userId = session.data?.user?.id;
    const { t } = useTranslation();
    const [state, setState] = useState('DURING');

    const relatedEvents = useRecommendedUserEventsQuery(
      {
        userId,
        first: 6,
        state,
        orderSort: 'DESC',
      },
      {
        enabled: !!userId,
      },
    );

    const events = relatedEvents.data?.events.page.edges;

    useEffect(() => {
      if (events && events.length === 0 && state === 'DURING') {
        setState('FUTURE');
      }
    }, [events]);

    return (
      <>
        {events && events?.length > 0 && (
          <div>
            <Typography.Title level={2} className="text-center">
              {t('Recommended events')}
            </Typography.Title>
            <Splide
              options={{
                gap: 24,
                type: 'loop',
                autoplay: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                speed: 1000,
                arrows: events.length > 3 ? true : false,
                perPage: 3,
                duplicated: false,
                drag: true,
                breakpoints: {
                  575: {
                    perPage: 1,
                    arrows: events.length > 1 ? true : false,
                  },
                  991: {
                    perPage: 2,
                    arrows: events.length > 2 ? true : false,
                  },
                },
              }}
            >
              {events?.map((event) => (
                <SplideSlide key={event.node?.id}>
                  <EventCard event={event.node as any} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </>
    );
  };

export default RecommendedUserEvents;
