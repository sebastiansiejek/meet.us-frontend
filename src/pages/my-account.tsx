import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ActiveUser from 'src/components/ActiveUser';
import Container from 'src/components/Container';

const MyAccount = () => {
  return (
    <Container>
      <h1>My account</h1>
      <ActiveUser />
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default MyAccount;
