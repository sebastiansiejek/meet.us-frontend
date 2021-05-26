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
          <div className="flex items-center w-full">
            <Avatar
              size={64}
              icon={<UserOutlined />}
              className="mr-5 flex items-center justify-center"
            />
            <strong>{`${firstName} "${nickname}" ${lastName}`}</strong>
          </div>
        </Card>
      </a>
    </Link>
  );
};

export default UserCard;
