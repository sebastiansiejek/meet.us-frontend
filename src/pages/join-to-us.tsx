import JoinUs from 'src/components/JoinUs/JoinUs';
import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { routes } from 'src/routes/routes';

const JoinToUsStyled = styled.div`
  margin-top: 3rem;
`;

const JoinToUs = () => (
  <JoinToUsStyled>
    <JoinUs />
  </JoinToUsStyled>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const { locale }: any = ctx;

  if (session?.accessToken) {
    return {
      redirect: {
        destination: routes.myAccount.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default JoinToUs;
