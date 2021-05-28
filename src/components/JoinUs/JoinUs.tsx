import Login from 'src/components/Login';
import Register from 'src/components/Register';
import React from 'react';
import { Row, Col, Typography } from 'antd';
import Container from 'src/components/Container';
import { useTranslation } from 'react-i18next';

export interface JoinUsProps {}

const JoinUs: React.FunctionComponent<JoinUsProps> = ({}) => {
  const { Title } = Typography;

  const { t } = useTranslation();

  return (
    <Container>
      <Row gutter={[32, 32]} justify="center">
        <Col lg={12}>
          <Title level={2}>{t('Sign in')}</Title>
          <Login />
        </Col>
        <Col lg={12}>
          <Title level={2}>{t('Sign up')}</Title>
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default JoinUs;
