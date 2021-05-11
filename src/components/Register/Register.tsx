import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useCreateUserMutation } from 'src/generated/gqlQueries';
import FormOutput from 'src/components/Form/FormOutput';
import { IApiError } from 'src/types/IApiError';

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = ({}) => {
  const { t } = useTranslation('form');

  const { mutate, error } = useCreateUserMutation({
    onSuccess: () => {},
  });

  return (
    <Form
      onFinish={(formData) => {
        const { login, password } = formData;

        mutate({
          email: login,
          password,
        });
      }}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: t('Please input your email') }]}
      >
        <Input
          placeholder={t('E-mail')}
          autoComplete="email"
          type="email"
          prefix={<MailTwoTone />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t('Please input your password') }]}
      >
        <Input.Password placeholder={t('Password')} prefix={<LockTwoTone />} />
      </Form.Item>
      <FormOutput error={error as IApiError} />
      <Button
        type="primary"
        htmlType="submit"
        style={{
          display: 'block',
          margin: '0 auto',
        }}
      >
        {t('Sign up')}
      </Button>
    </Form>
  );
};

export default Register;
