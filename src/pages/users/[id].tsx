interface IUserPage {
  id: string;
}

const User: React.FC<IUserPage> = ({ id }) => {
  return <></>;
};

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => ({ props: { id: params.id } });

export default User;