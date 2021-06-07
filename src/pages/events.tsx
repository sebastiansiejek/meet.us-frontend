import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import PageHeader from 'src/components/PageHeader';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';

const IndexPage = () => {
  const { data } = useEventsQuery();

  return (
    <Container>
      <PageHeader title="Events" />
      {data?.events.page.edges && (
        <EventCards events={data.events.page.edges as [{ node: Event }]} />
      )}
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
