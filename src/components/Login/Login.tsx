import FormOutput from '../Form/FormOutput';
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useLogin } from 'src/hooks/useLogin';
import { useTranslation } from 'react-i18next';

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = ({}) => {
  const { t } = useTranslation();
  const {
    mutate: { mutateAsync, error, isLoading },
  } = useLogin();
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={(formData) => {
        const { login, password } = formData;

        mutateAsync({
          email: login,
          password,
        }).then(() => {
          form.resetFields();
          notification.success({
            message: t('You have been logged in'),
          });
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
