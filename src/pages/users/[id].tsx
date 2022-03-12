import Container from 'src/components/Container';
import EventCards from 'src/components/Events/EventCards';
import PageHeader from 'src/components/PageHeader';
import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Card, Col, Row, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { dehydrate, QueryClient } from 'react-query';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSingleUserQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';

interface IUserPage {
  id: string;
}

const defaultUserArgs = {
  first: 6,
  orderSort: 'DESC',
  orderField: 'endDate',
};

const User: React.FC<IUserPage> = ({ id }) => {
  const { data } = useSingleUserQuery({
    id,
    ...defaultUserArgs,
  });

  const { t } = useTranslation();

  if (data) {
    const { firstName, lastname, nickname, description } = data.user;
    const userEvents = data.userEvents;

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
  }

  return <></>;
};

export const getServerSideProps = async ({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) => {
  const userId = params.id;
  const queryClient = new QueryClient();
  const userParams = {
    id: userId,
    ...defaultUserArgs,
  };

  await queryClient.prefetchQuery(useSingleUserQuery.getKey(userParams), () =>
    useSingleUserQuery.fetcher(userParams).call(null),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: userId,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default User;
