import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'src/components/Container';

const MyAccount = () => (
  <Container>
    <h1>My account</h1>
  </Container>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default MyAccount;
