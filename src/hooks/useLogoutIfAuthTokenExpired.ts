import { routes } from 'src/routes/routes';
import dayjs from 'dayjs';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useLogoutIfAuthTokenExpired = () => {
  const session = useSession();

  useEffect(() => {
    const tokenExpiresTime = session.data?.expires;

    if (tokenExpiresTime && dayjs().unix() > Number(tokenExpiresTime)) {
      signOut({
        redirect: true,
        callbackUrl: routes.joinToUs.href,
      });
    }
  }, [session]);
};

export default useLogoutIfAuthTokenExpired;
