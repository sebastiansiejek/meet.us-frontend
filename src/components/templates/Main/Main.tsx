import React, { ComponentType } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

export interface MainProps {
  Component: ComponentType<{}>;
  pageProps: any;
}

const Main: React.FunctionComponent<MainProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation();

  const { language } = i18n;
  if (language) {
    dynamic(() =>
      import(`dayjs/locale/${language}.js`).then((mod) => {
        dayjs.locale(language);
        return mod;
      }),
    );
  }

  return <Component {...pageProps} />;
};

export default Main;
