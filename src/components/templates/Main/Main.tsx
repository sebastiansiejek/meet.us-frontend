import React, { ComponentType } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();

  const { language } = i18n;
  import(`dayjs/locale/${language}`);
  dayjs.locale(language);

  return <Component {...pageProps} />;
};

export default Main;
