import FormOutput from '../Form/FormOutput';
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { routes } from 'src/routes/routes';

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = ({}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [error, setError] = useState<IApiError | null>();
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();

  return (
    <Form
      form={form}
      onFinish={(formData) => {
        const { login, password } = formData;

        setLogin(true);
        signIn('credentials', {
          login,
          password,
          redirect: false,
        })
          .then((res: any) => {
            if (res.error) {
              setError({
                data: {
                  message: res.error,
                },
              });
            } else {
              setError(null);
              form.resetFields();
              notification.success({
                message: t('You have been logged in'),
              });
              router.push(routes.myAccount.href);
            }
          })
          .finally(() => setLogin(false));
      }}
      data-cy="login-form"
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: t('Please input your login') }]}
        data-cy="login-form-login"
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
        data-cy="login-form-password"
      >
        <Input.Password placeholder={t('Password')} prefix={<LockTwoTone />} />
      </Form.Item>
      <FormOutput error={error as IApiError} />
      <Button
        type="primary"
        htmlType="submit"
        loading={isLogin}
        className="block mx-auto"
        data-cy="login-form-submit"
      >
        {t('Sign in')}
      </Button>
    </Form>
  );
};

export default Login;
