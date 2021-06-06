import React, { ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import localePl from 'antd/lib/locale/pl_PL';
import localeEn from 'antd/lib/locale/en_GB';
import { ConfigProvider } from 'antd';
import SiteFooter from 'src/components/SiteFooter';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider locale={i18n.language === 'pl' ? localePl : localeEn}>
      <Component {...pageProps} />
      <SiteFooter />
    </ConfigProvider>
  );
};

export default Main;
