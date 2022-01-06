import 'dayjs/locale/pl';
import React, { ComponentType } from 'react';
import SiteFooter from 'src/components/SiteFooter';
import localeEn from 'antd/lib/locale/en_GB';
import localePl from 'antd/lib/locale/pl_PL';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import Navbar from 'src/components/Navbar';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider locale={i18n.language === 'pl' ? localePl : localeEn}>
      <Navbar />
      <Component {...pageProps} />
      <SiteFooter />
    </ConfigProvider>
  );
};

export default Main;
