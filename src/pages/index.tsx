import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import EventCards from 'src/components/Events/EventCards';
import HeroSearchBanner from 'src/components/HeroSearchBanner';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';

const IndexPage = () => {
  const { data } = useEventsQuery({
    first: 6,
    orderField: 'startDate',
    orderSort: 'ASC',
    isArchive: false,
  });

  return (
    <>
      <HeroSearchBanner />
      {data && (
        <EventCards events={data.events.page.edges as [{ node: Event }]} />
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
