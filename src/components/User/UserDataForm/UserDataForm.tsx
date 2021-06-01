import { LockTwoTone, MailTwoTone } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface UserDataFormProps {}

const UserDataForm: React.FunctionComponent<UserDataFormProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <Form>
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('Please input your email') }]}
      >
        <Input type="email" placeholder={t('Email')} prefix={<MailTwoTone />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t('Please input your password') }]}
      >
        <Input.Password placeholder={t('Password')} prefix={<LockTwoTone />} />
      </Form.Item>
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: t('Please input your first name') }]}
      >
        <Input placeholder={t('First name')} />
      </Form.Item>
      <Form.Item
        name="lastname"
        rules={[{ required: true, message: t('Please input your last name') }]}
      >
        <Input placeholder={t('Last name')} />
      </Form.Item>
      <Form.Item
        name="nickanme"
        rules={[{ required: true, message: t('Please input your nickname') }]}
      >
        <Input placeholder={t('Nickname')} />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="block mx-auto">
        {t('Save')}
      </Button>
    </Form>
  );
};

export default UserDataForm;
