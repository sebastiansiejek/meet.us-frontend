import 'dayjs/locale/pl';
import React, { ComponentType, useEffect } from 'react';
import SiteFooter from 'src/components/SiteFooter';
import localeEn from 'antd/lib/locale/en_GB';
import localePl from 'antd/lib/locale/pl_PL';
import { ConfigProvider } from 'antd';
import { getCookieToken } from 'src/services/AuthService';
import { setToken } from 'src/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const cookieToken = getCookieToken();
  useEffect(() => {
    dispatch(
      setToken({
        token: getCookieToken(),
      }),
    );
  }, [cookieToken]);

  return (
    <ConfigProvider locale={i18n.language === 'pl' ? localePl : localeEn}>
      <Component {...pageProps} />
      <SiteFooter />
    </ConfigProvider>
  );
};

export default Main;
