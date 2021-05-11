import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

export interface ContainerProps {}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
