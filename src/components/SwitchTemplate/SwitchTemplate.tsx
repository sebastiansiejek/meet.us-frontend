import React, { ComponentType, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from 'src/services/AuthService';
import { setToken } from 'src/store/slices/userSlice';
import { IStore } from 'src/store/store';
import Logged from '../templates/Logged';
import UnLogged from '../templates/UnLogged';

export interface SwitchTemplateProps {
  Component: ComponentType;
  pageProps: any;
}

const SwitchTemplate: React.FunctionComponent<SwitchTemplateProps> = ({
  Component,
  pageProps,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state: IStore) => state.user.token);

  useEffect(() => {
    if (!token) {
      const localStorageToken = AuthService.getToken();
      dispatch(
        setToken({
          token: localStorageToken ? localStorageToken : '',
        }),
      );
    }
  }, [token]);

  return (
    <>
      {token && <Logged Component={Component} pageProps={pageProps} />}
      {!token && <UnLogged />}
    </>
  );
};

export default SwitchTemplate;
