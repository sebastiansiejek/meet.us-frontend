import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import SearchBar from 'src/components/SearchBar';
import { Event, useEventsQuery } from 'src/generated/gqlQueries';

const IndexPage = () => {
  const { data } = useEventsQuery();

  return (
    <>
      <Container>
        <SearchBar />
      </Container>
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
