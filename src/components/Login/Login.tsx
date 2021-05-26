import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import FormOutput from '../Form/FormOutput';
import { IApiError } from 'src/types/IApiError';
import { useLogin } from 'src/hooks/useLogin';

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = ({}) => {
  const { t } = useTranslation('form');
  const { mutate, error, isLoading } = useLogin();

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
        rules={[{ required: true, message: t('Please input your login') }]}
      >
        <Input
          placeholder={t('Login')}
          autoComplete="username"
          type="text"
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
        loading={isLoading}
        className="block mx-auto"
      >
        {t('Sign in')}
      </Button>
    </Form>
  );
};

export default Login;
