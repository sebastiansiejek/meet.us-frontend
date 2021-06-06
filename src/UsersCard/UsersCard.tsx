import { Col, Row, Spin } from 'antd';
import React from 'react';
import Container from 'src/components/Container';
import UserCard from 'src/components/User/UserCard';
import { useUsersQuery } from 'src/generated/gqlQueries';

export interface UsersCardProps {}

const UsersCard: React.FunctionComponent<UsersCardProps> = () => {
  const { data, isLoading } = useUsersQuery();
  const users = data?.users;

  return (
    <>
      {isLoading && <Spin />}
      {users && (
        <Container>
          <Row gutter={16}>
            {users.map((user) => {
              const { nickname, firstName, lastname, id } = user;

              if (nickname && firstName && lastname && id)
                return (
                  <Col
                    key={id}
                    span={24}
                    sm={12}
                    lg={8}
                    style={{
                      marginTop: 8,
                    }}
                  >
                    <UserCard
                      id={id}
                      nickname={nickname}
                      firstName={firstName}
                      lastName={lastname}
                    />
                  </Col>
                );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default UsersCard;
