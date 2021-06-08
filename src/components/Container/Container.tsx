import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  max-width: 1140px;
  padding: 0 2.4rem;
  margin: 0 auto;

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

export interface ContainerProps {
  className?: string;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => {
  return <ContainerStyled className={className}>{children}</ContainerStyled>;
};

export default Container;
