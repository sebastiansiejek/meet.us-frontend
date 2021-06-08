import { Form, Input, Button, DatePicker, notification } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FormOutput from 'src/components/Form/FormOutput';
import { useCreateEventMutation } from 'src/generated/gqlQueries';
import { IApiError } from 'src/types/IApiError';
import {} from 'react-query';

export interface EventFormProps {}

const EventForm: React.FunctionComponent<EventFormProps> = ({}) => {
  const [form] = Form.useForm();
  const createEventMutation = useCreateEventMutation();
  const { TextArea } = Input;
  const { t } = useTranslation();

  return (
    <Form
      form={form}
      onFinish={({ title, description, dates, maxParticipants }) => {
        createEventMutation
          .mutateAsync({
            title,
            description,
            startDate: dates[0].format('YYYY-MM-DD HH:mm'),
            endDate: dates[1].format('YYYY-MM-DD HH:mm'),
            maxParticipants: parseInt(maxParticipants, 10),
          })
          .then(() => {
            notification.success({
              message: t('Event has been created'),
            });
            form.resetFields();
          });
      }}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: t('Title is required') }]}
      >
        <Input placeholder={t('Title')} />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[{ required: true, message: t('Description is required') }]}
      >
        <TextArea placeholder={t('Description')} rows={2} />
      </Form.Item>
      <Form.Item
        name="dates"
        rules={[{ required: true, message: t('Date is required') }]}
      >
        <DatePicker.RangePicker
          showTime
          placeholder={[t('Start'), t('End')]}
          format="DD MMMM YYYY HH:mm"
          className="w-full"
        />
      </Form.Item>
      <Form.Item
        name="maxParticipants"
        rules={[
          {
            required: true,
            message: t('Input the maximum number of participants'),
          },
        ]}
      >
        <Input
          type="number"
          min={2}
          placeholder={t('Maximum number of participants')}
        />
      </Form.Item>
      <FormOutput error={createEventMutation.error as IApiError} />
      <Button
        type="primary"
        htmlType="submit"
        loading={createEventMutation.isLoading}
      >
        {t('Save')}
      </Button>
    </Form>
  );
};

export default EventForm;
