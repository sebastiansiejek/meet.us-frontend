import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ActivateUser from 'src/components/ActivateUser';
import Container from 'src/components/Container';
import PageHeader from 'src/PageHeader';

const MyAccount = () => {
  return (
    <Container>
      <PageHeader title="My account" />
      <ActivateUser />
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default MyAccount;
