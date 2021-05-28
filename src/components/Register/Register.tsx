import FormOutput from 'src/components/Form/FormOutput';
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';
import { useCreateUserMutation } from 'src/generated/gqlQueries';
import { useLogin } from 'src/hooks/useLogin';
import { useTranslation } from 'react-i18next';

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = ({}) => {
  const [form] = Form.useForm();
  const loginMutation = useLogin();
  const { error, isLoading, mutateAsync } = useCreateUserMutation();
  const { t } = useTranslation();

  return (
    <Form
      form={form}
      onFinish={(formData) => {
        const { login, password } = formData;

        mutateAsync({
          email: login,
          password,
        }).then(() => {
          notification.success({
            message: t('Your account has been created'),
          });
          loginMutation
            .mutateAsync({
              email: login,
              password,
            })
            .then(() => {
              form.resetFields();
              notification.success({
                message: t('You have been logged in'),
              });
            });
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
        loading={isLoading || loginMutation.isLoading}
        className="block mx-auto"
      >
        {t('Sign up')}
      </Button>
    </Form>
  );
};

export default Register;
