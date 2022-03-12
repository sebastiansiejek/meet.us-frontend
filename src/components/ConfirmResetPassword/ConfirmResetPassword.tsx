import FormOutput from '../Form/FormOutput';
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { LockTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useConfirmResetPasswordMutation } from 'src/generated/gqlQueries';
import { useRouter } from 'next/router';
import { routes } from 'src/routes/routes';

export interface ConfirmResetPasswordProps {
  token: string;
}

const ConfirmResetPassword = ({ token }: ConfirmResetPasswordProps) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const confirmResetPassword = useConfirmResetPasswordMutation();
  const router = useRouter();

  return (
    <>
      <Form
        form={form}
        onFinish={(props) => {
          const { password } = props;
          confirmResetPassword
            .mutateAsync({
              newPassword: password,
              confirmPassword: password,
              token,
            })
            .then((res) => {
              form.resetFields();
              notification.info({
                message: t(res.confirmResetPassword.message),
              });
              router.push(routes.joinToUs.href);
            });
        }}
      >
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('Please input your password') }]}
          data-cy="login-form-password"
        >
          <Input.Password
            placeholder={t('Password')}
            prefix={<LockTwoTone />}
          />
        </Form.Item>
        <FormOutput error={confirmResetPassword.error as IApiError} />
        <Button
          type="primary"
          htmlType="submit"
          loading={confirmResetPassword.isLoading}
          className="block mx-auto"
        >
          {t('Reset password')}
        </Button>
      </Form>
    </>
  );
};

export default ConfirmResetPassword;
