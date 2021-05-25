import Avatar from 'antd/lib/avatar/avatar';
import Link from 'next/link';
import React from 'react';
import { Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export interface UserCardProps {
  firstName: string;
  lastName: string;
  nickname: string;
  id: string;
}

const UserCard: React.FunctionComponent<UserCardProps> = ({
  firstName,
  lastName,
  nickname,
  id,
}) => {
  return (
    <Link href={`/users/${id}`}>
      <a>
        <Card>
          <Avatar
            size={64}
            icon={<UserOutlined />}
            style={{ marginRight: '1rem' }}
          />
          <strong>{`${firstName} "${nickname}" ${lastName}`}</strong>
        </Card>
      </a>
    </Link>
  );
};

export default UserCard;
