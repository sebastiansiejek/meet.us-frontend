import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import CardLink from 'src/components/CardLink';

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
    <CardLink
      linkProps={{
        href: `/users/${id}`,
      }}
    >
      <div className="flex items-center w-full">
        <div className="mr-5">
          <Avatar
            size={64}
            icon={<UserOutlined />}
            className="flex items-center justify-center"
          />
        </div>
        <strong>{`${firstName} "${nickname}" ${lastName}`}</strong>
      </div>
    </CardLink>
  );
};

export default UserCard;
