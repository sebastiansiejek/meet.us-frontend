import { Form, Input, Button, DatePicker } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface EventFormProps {}

const EventForm: React.FunctionComponent<EventFormProps> = ({}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { TextArea } = Input;

  return (
    <Form
      form={form}
      onFinish={(formData) => {
        console.log(formData);
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
          format="DD MMMM YYYY"
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
      <Button type="primary" htmlType="submit">
        {t('Save')}
      </Button>
    </Form>
  );
};

export default EventForm;
