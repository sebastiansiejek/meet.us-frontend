import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useActiveUserMutation } from 'src/generated/gqlQueries';
import { Spin } from 'antd';
import FormOutput from '../Form/FormOutput';
import { IApiError } from 'src/types/IApiError';

export interface ActiveUserProps {}

const ActiveUser: React.FunctionComponent<ActiveUserProps> = ({}) => {
  const router = useRouter();
  const {
    mutateAsync,
    isLoading,
    error,
    data,
    isSuccess,
  } = useActiveUserMutation();

  const { token } = router.query;

  useEffect(() => {
    if (token) {
      mutateAsync({ token: token.toString().split(' ').join('+') });
    }
  }, [token]);

  return (
    <>
      {isLoading && <Spin />}
      {isSuccess && console.log(data)}
      {<FormOutput error={error as IApiError} />}
    </>
  );
};

export default ActiveUser;
