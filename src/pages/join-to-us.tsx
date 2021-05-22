import JoinUs from 'src/components/JoinUs/JoinUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const JoinToUs = () => (
  <>
    <JoinUs />
  </>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'form'])),
  },
});

export default JoinToUs;
