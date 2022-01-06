import { UserOutlined } from '@ant-design/icons';
import { Card, Col, Row, Avatar } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'src/components/Container';
import PageHeader from 'src/components/PageHeader';
import { SingleUserQuery } from 'src/generated/gqlQueries';

export interface SingleUserProps {
  data: SingleUserQuery;
}

const SingleUser: React.FunctionComponent<SingleUserProps> = ({ data }) => {
  const { firstName, lastname, email, nickname } = data.user;
  const { t } = useTranslation();

  return (
    <Container>
      <PageHeader title={nickname ? nickname : `${firstName} ${lastname}`} />
      <Row gutter={16}>
        <Col span={24} md={16}>
          <Card>
            <div className="flex items-center">
              <div className="mr-5">
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  className="flex items-center justify-center"
                />
              </div>
              <strong>{`${firstName} ${
                nickname && '"' + nickname + '"'
              } ${lastname}`}</strong>
            </div>
          </Card>
        </Col>
        <Col span={24} md={8}>
          <Card title={t('Contact details')}>
            <a href={`mailto:${email}`}>{email}</a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleUser;
