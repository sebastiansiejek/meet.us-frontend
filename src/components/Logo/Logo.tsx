import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = ({}) => {
  return (
    <Title level={2} style={{ margin: 0 }}>
      <span
        style={{
          color: '#2A9D8F',
        }}
      >
        meet
      </span>
      <span
        style={{
          color: '#E9C46A',
        }}
      >
        .
      </span>
      <span
        style={{
          color: '#E76F51',
        }}
      >
        us
      </span>
    </Title>
  );
};

export default Logo;
