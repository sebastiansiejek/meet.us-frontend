import { UserOutlined } from '@ant-design/icons';
import { Card, Col, Row, Avatar, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import PageHeader from 'src/components/PageHeader';
import { SingleUserQuery } from 'src/generated/gqlQueries';

export interface SingleUserProps {
  data: SingleUserQuery;
}

const SingleUser: React.FunctionComponent<SingleUserProps> = ({ data }) => {
  const { firstName, lastname, nickname, description } = data.user;
  const userEvents = data.userEvents;
  const { t } = useTranslation();

  return (
    <Container>
      <PageHeader title={nickname ? nickname : `${firstName} ${lastname}`} />
      <Row gutter={16}>
        <Col span={24} md={24}>
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
            {description && (
              <Typography.Paragraph className="mt-4">
                {description}
              </Typography.Paragraph>
            )}
          </Card>
        </Col>
      </Row>
      {userEvents?.page?.edges && (
        <div className="mt-10">
          <Title level={2}>{t('Latest')}</Title>
          {/* @ts-ignore */}
          <EventCards events={userEvents.page.edges as [{ node: Event }]} />
        </div>
      )}
    </Container>
  );
};

export default SingleUser;
