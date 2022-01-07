import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useActivateUserMutation } from 'src/generated/gqlQueries';
import { Alert, Spin } from 'antd';
import FormOutput from '../Form/FormOutput';
import { IApiError } from 'src/types/IApiError';
import { useTranslation } from 'react-i18next';
import { routes } from 'src/routes/routes';

export interface ActivateUserProps {}

const ActivateUser: React.FunctionComponent<ActivateUserProps> = ({}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { mutateAsync, isLoading, error, data, isSuccess } =
    useActivateUserMutation();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      mutateAsync({ token: token.toString().split(' ').join('+') }).then(() => {
        router.replace(routes.joinToUs.href, undefined, { shallow: true });
      });
    }
  }, [token]);

  return (
    <>
      {token && (
        <>
          {isLoading && <Spin />}
          {isSuccess && data && (
            <Alert
              message={`${
                data.activateUser.firstName || data.activateUser.email
              } ${t('Your account is active now.')}`}
            />
          )}
          {<FormOutput error={error as IApiError} />}
        </>
      )}
    </>
  );
};

export default ActivateUser;
