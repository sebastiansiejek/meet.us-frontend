import React, { ComponentType } from 'react';

export interface LoggedProps {
  Component: ComponentType;
  pageProps: any;
}

const Logged: React.FunctionComponent<LoggedProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Logged;
