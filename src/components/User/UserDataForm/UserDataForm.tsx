import React from 'react';
import { Form, Input, Button, Spin, notification, Radio } from 'antd';
import { LockTwoTone, MailTwoTone } from '@ant-design/icons';
import {
  useCurrentUserQuery,
  useUpdateUserMutation,
} from 'src/generated/gqlQueries';
import { useTranslation } from 'react-i18next';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import FormOutput from 'src/components/Form/FormOutput';
import { IApiError } from 'src/types/IApiError';
import TextArea from 'antd/lib/input/TextArea';

export interface UserDataFormProps {}

const UserDataForm: React.FunctionComponent<UserDataFormProps> = ({}) => {
  const { t } = useTranslation();
  const { isLoading, data } = useCurrentUserQuery();
  const updateUserMutation = useUpdateUserMutation();

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Form
          initialValues={{
            email: data.currentUser.email,
            firstName: data.currentUser.firstName || '',
            lastname: data.currentUser.lastname || '',
            nickname: data.currentUser.nickname || '',
            description: data.currentUser.description || '',
            sex: data.currentUser.sex || 0,
          }}
          onFinish={(formData) => {
            updateUserMutation
              // @ts-ignore
              .mutateAsync({
                ...pickBy(formData, identity),
              })
              .then(() => {
                notification.success({
                  message: t('Your personal data has been updated'),
                });
              })
              .catch((error) => console.log(error));
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
            rules={[{ message: t('Please input your password') }]}
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
            name="sex"
            rules={[{ required: true, message: t('Please input your sex') }]}
          >
            <Radio.Group defaultValue={0}>
              <Radio value={0}>{t('Woman')}</Radio>
              <Radio value={1}>{t('Man')}</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="nickname"
            rules={[
              { required: false, message: t('Please input your nickname') },
            ]}
          >
            <Input placeholder={t('Nickname')} />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              { required: false, message: t('Please input your description') },
            ]}
          >
            <TextArea
              rows={4}
              className="resize-none"
              placeholder={t('Description')}
            />
          </Form.Item>
          <FormOutput error={updateUserMutation.error as IApiError} />
          <Button
            loading={updateUserMutation.isLoading}
            type="primary"
            htmlType="submit"
            className="block mx-auto"
          >
            {t('Save')}
          </Button>
        </Form>
      )}
    </>
  );
};

export default UserDataForm;
