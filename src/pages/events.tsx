import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Container from 'src/components/Container';
import PageHeader from 'src/components/PageHeader';
import { useSearchEventsQuery } from 'src/generated/gqlQueries';
import isUndefined from 'lodash/isUndefined';
import EventsWithSearch from 'src/components/Events/EventsWithSearch';

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
      {data && <EventsWithSearch data={data} initSearchQuery={`${q}`} />}
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default IndexPage;
