import FormOutput from 'src/components/Form/FormOutput';
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useCreateUserMutation } from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import { signIn } from 'next-auth/react';
import { routes } from 'src/routes/routes';
import { useRouter } from 'next/router';

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = ({}) => {
  const [form] = Form.useForm();
  const { error, isLoading, mutateAsync } = useCreateUserMutation();
  const { t } = useTranslation();
  const [loginError, setError] = useState<IApiError | null>();
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();

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
            message: t('Your account has been created'),
          });
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
                notification.success({
                  message: t('You have been logged in'),
                });
                router.push(routes.myAccount.href);
              }
            })
            .finally(() => setLogin(false));
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
      <FormOutput error={(error as IApiError) || loginError} />
      <Button
        type="primary"
        htmlType="submit"
        loading={isLoading || isLogin}
        className="block mx-auto"
      >
        {t('Sign up')}
      </Button>
    </Form>
  );
};

export default Register;
