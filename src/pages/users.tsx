import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import UsersCard from 'src/components/UsersCard';
import PageHeader from 'src/components/PageHeader';
import Container from 'src/components/Container';

const IndexPage = () => {
  return (
    <>
      <Container>
        <PageHeader title="Users" />
        <UsersCard />
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
