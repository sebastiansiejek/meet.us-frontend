import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

export interface CardLinkProps {
  linkProps: LinkProps;
  cardProps?: CardProps;
}

const CardLinkStyled = styled.a`
  display: block;
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const CardLink: React.FunctionComponent<CardLinkProps> = ({
  children,
  linkProps,
  cardProps,
}) => {
  return (
    <Link {...linkProps}>
      <CardLinkStyled>
        <Card {...cardProps}>{children}</Card>
      </CardLinkStyled>
    </Link>
  );
};

export default CardLink;
