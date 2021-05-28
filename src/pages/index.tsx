import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import EventCards from 'src/components/Events/EventCards';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';

const IndexPage = () => {
  const { data } = useEventsQuery();

  return <>{data && <EventCards events={data.events as Array<Event>} />}</>;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
