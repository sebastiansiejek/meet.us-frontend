import FormOutput from '../Form/FormOutput';
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { IApiError } from 'src/types/IApiError';
import { MailTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useResetPasswordMutation } from 'src/generated/gqlQueries';

export interface RemindPasswordProps {}

const RemindPassword: React.FunctionComponent<RemindPasswordProps> = ({}) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const resetPasswordMutation = useResetPasswordMutation();

  return (
    <>
      <Form
        form={form}
        onFinish={(props) => {
          const { login } = props;
          resetPasswordMutation.mutateAsync({ email: login }).then((res) => {
            notification.info({ message: t(res.resetPassword.message) });
            form.resetFields();
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
        <FormOutput error={resetPasswordMutation.error as IApiError} />
        <Button
          type="primary"
          htmlType="submit"
          loading={resetPasswordMutation.isLoading}
          className="block mx-auto"
        >
          {t('Remind me password')}
        </Button>
      </Form>
    </>
  );
};

export default RemindPassword;
