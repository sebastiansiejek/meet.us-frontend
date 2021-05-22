import React from 'react';
import JoinUs from 'src/components/JoinUs';

export interface UnLoggedProps {}

const UnLogged: React.FunctionComponent<UnLoggedProps> = ({}) => {
  return (
    <>
      <JoinUs />
    </>
  );
};

export default UnLogged;
