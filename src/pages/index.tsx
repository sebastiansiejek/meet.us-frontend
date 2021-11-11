import { Button, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import EventsMap from 'src/components/EventsMap';
import HeroSearchBanner from 'src/components/HeroSearchBanner';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';
import { routes } from 'src/routes/routes';

const IndexPage = () => {
  const { data } = useEventsQuery({
    first: 6,
    orderField: 'startDate',
    orderSort: 'DESC',
    query: '',
    // state: 'DURING',
  });

  const { t } = useTranslation();
  const events = data?.events.page.edges as [{ node: Event }];

  return (
    <>
      <HeroSearchBanner />
      {data?.events.page.edges && (
        <>
          <Container>
            <Typography.Title level={2} className="text-center">
              {t('During events')}
            </Typography.Title>
            <EventCards events={events} />
            <Link href={routes.events.href} passHref>
              <a className="flex justify-center">
                <Button type="primary" className="mt-8">
                  {t('See all events')}
                </Button>
              </a>
            </Link>
            <div className="mt-20">
              <EventsMap />
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
