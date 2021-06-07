import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import PageHeader from 'src/components/PageHeader';
import SearchBar from 'src/components/SearchBar';
import { Event, useSearchEventsQuery } from 'src/generated/gqlQueries';
import isUndefined from 'lodash/isUndefined';

const IndexPage = () => {
  const { query } = useRouter();

  const q = !isUndefined(query.q) ? query.q : '';

  const { data } = useSearchEventsQuery({
    first: 12,
    query: `${q}`,
  });

  return (
    <Container>
      <PageHeader title="Events" />
      <SearchBar value={`${q}`} />
      {data?.searchBar.page.edges && (
        <EventCards events={data.searchBar.page.edges as [{ node: Event }]} />
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
