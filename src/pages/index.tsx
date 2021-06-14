import { Button, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import HeroSearchBanner from 'src/components/HeroSearchBanner';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';

const IndexPage = () => {
  const { data } = useEventsQuery({
    first: 6,
    orderField: 'startDate',
    orderSort: 'DESC',
    query: '',
  });

  const { t } = useTranslation();

  return (
    <>
      <HeroSearchBanner />
      {data?.events.page.edges && (
        <>
          <Container>
            <Typography.Title level={2} className="text-center">
              {t('During events')}
            </Typography.Title>
            <EventCards events={data.events.page.edges as [{ node: Event }]} />
            <Link href="/events" passHref>
              <a className="flex justify-center">
                <Button type="primary" className="mt-8">
                  {t('See all events')}
                </Button>
              </a>
            </Link>
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
