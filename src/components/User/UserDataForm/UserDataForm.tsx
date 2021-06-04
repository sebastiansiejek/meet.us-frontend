import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LockTwoTone, MailTwoTone } from '@ant-design/icons';
import { useCurrentUserDataQuery } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';

export interface UserDataFormProps {}

const UserDataForm: React.FunctionComponent<UserDataFormProps> = ({}) => {
  const { t } = useTranslation();
  const { isLoading, data } = useCurrentUserDataQuery();

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Form
          initialValues={{
            email: data.user.email,
            firstName: data.user.firstName || '',
            lastname: data.user.lastname || '',
            nickname: data.user.nickname || '',
          }}
        >
          <Form.Item
            rules={[{ required: true, message: t('Please input your email') }]}
            name="email"
          >
            <Input
              type="email"
              placeholder={t('Email')}
              prefix={<MailTwoTone />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: t('Please input your password') },
            ]}
          >
            <Input.Password
              placeholder={t('Password')}
              prefix={<LockTwoTone />}
            />
          </Form.Item>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: t('Please input your first name') },
            ]}
          >
            <Input placeholder={t('First name')} />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              { required: true, message: t('Please input your last name') },
            ]}
          >
            <Input placeholder={t('Last name')} />
          </Form.Item>
          <Form.Item
            name="nickanme"
            rules={[
              { required: true, message: t('Please input your nickname') },
            ]}
          >
            <Input placeholder={t('Nickname')} />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="block mx-auto">
            {t('Save')}
          </Button>
        </Form>
      )}
    </>
  );
};

export default UserDataForm;
