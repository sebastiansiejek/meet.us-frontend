import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ActivateUser from 'src/components/ActivateUser';
import Container from 'src/components/Container';

const MyAccount = () => {
  return (
    <Container>
      <h1>My account</h1>
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
