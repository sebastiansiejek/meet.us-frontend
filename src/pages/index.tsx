import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import HeroSearchBanner from 'src/components/HeroSearchBanner';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button, Typography, Spin } from 'antd';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';
import { routes } from 'src/routes/routes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import JoinUs from 'src/components/JoinUs';

const IndexPage = () => {
  const [state, setState] = useState('DURING');

  const { data } = useEventsQuery({
    first: 6,
    orderField: 'startDate',
    orderSort: 'DESC',
    query: '',
    state,
  });

  useEffect(() => {
    if (
      data?.events.page.edges &&
      data.events.page.edges.length === 0 &&
      state === 'DURING'
    ) {
      setState('FUTURE');
    }
  }, [data]);

  const { t } = useTranslation();
  const events = data?.events.page.edges as [{ node: Event }];

  const EventsMap = useMemo(
    () =>
      dynamic(() => import('src/components/EventsMap'), {
        loading: () => <Spin />,
        ssr: false,
      }),
    [],
  );

  return (
    <>
      <HeroSearchBanner />
      <Container>
        {data?.events.page.edges && (
          <>
            <Typography.Title level={2} className="text-center">
              {state === 'DURING' && t('During events')}
              {state === 'FUTURE' && t('Upcoming events')}
            </Typography.Title>
            <EventCards events={events} />
            <Link href={routes.events.href} passHref>
              <a className="flex justify-center">
                <Button type="primary" className="mt-8">
                  {t('See all events')}
                </Button>
              </a>
            </Link>
          </>
        )}
        <div className="mt-20">
          <EventsMap />
        </div>
        <div className="mt-40">
          <JoinUs />
        </div>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
