import JoinUs from 'src/components/JoinUs/JoinUs';
import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const JoinToUsStyled = styled.div`
  margin-top: 3rem;
`;

const JoinToUs = () => (
  <JoinToUsStyled>
    <JoinUs />
  </JoinToUsStyled>
);

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'form'])),
  },
});

export default JoinToUs;
