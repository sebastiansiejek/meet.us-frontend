import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SingleUser from 'src/components/pages/SingleUser';
import { useSingleUserQuery } from 'src/generated/gqlQueries';
interface IUserPage {
  id: string;
}

const User: React.FC<IUserPage> = ({ id }) => {
  const { data } = useSingleUserQuery({
    id,
  });

  return <>{data && <SingleUser data={data} />}</>;
};

export const getServerSideProps = async ({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) => ({
  props: {
    id: params.id,
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default User;
