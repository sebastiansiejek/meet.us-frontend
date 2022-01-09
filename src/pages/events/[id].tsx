import { useSingleEventPageQuery } from 'src/generated/gqlQueries';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Event from 'src/components/pages/Event';
import { useSession } from 'next-auth/react';

interface IEventPage {
  id: string;
}

const EventPage: React.FC<IEventPage> = ({ id }) => {
  const session: any = useSession();
  const loggedUserId = session.data?.user?.id;

  const { data } = useSingleEventPageQuery({
    id,
    ...(loggedUserId && { userId: loggedUserId }),
  });

  if (data && data.event) {
    return (
      <div>
        <Event data={data} />
      </div>
    );
  }

  return <></>;
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

export default EventPage;
