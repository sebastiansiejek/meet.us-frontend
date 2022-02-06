import 'dayjs/locale/pl';
import React, { ComponentType } from 'react';
import SiteFooter from 'src/components/SiteFooter';
import localeEn from 'antd/lib/locale/en_GB';
import localePl from 'antd/lib/locale/pl_PL';
import { ConfigProvider, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import Navbar from 'src/components/Navbar';
import moment from 'moment';
import 'moment/locale/pl';
import 'moment/locale/en-gb';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

notification.config({
  placement: 'bottomRight',
});

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();
  moment.locale(i18n.language);

  return (
    <ConfigProvider locale={i18n.language === 'pl' ? localePl : localeEn}>
      <Navbar />
      <div className="pt-24">
        <Component {...pageProps} />
      </div>
      <SiteFooter />
    </ConfigProvider>
  );
};

export default Main;
