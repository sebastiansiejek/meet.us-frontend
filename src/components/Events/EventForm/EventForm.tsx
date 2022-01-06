import { Form, Input, Button, DatePicker, notification, Select } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import FormOutput from 'src/components/Form/FormOutput';
import {
  SingleEventPageQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
} from 'src/generated/gqlQueries';
import { IApiError } from 'src/types/IApiError';
import { getMapEventTypes } from 'src/types/IEvent';

export interface EventFormProps {
  setOpen: Function;
  initialValues: SingleEventPageQuery['event'];
}

const EventForm: React.FunctionComponent<EventFormProps> = ({
  setOpen,
  initialValues,
}) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { t } = useTranslation();

  const createEventMutation = useCreateEventMutation({
    onSuccess: () => {
      notification.success({
        message: t('Event has been created'),
      });
      form.resetFields();
      setOpen(false);
      queryClient.invalidateQueries('FindUserEvents');
      queryClient.invalidateQueries('SearchEvents');
    },
  });

  const updateEventMutation = useUpdateEventMutation({
    onSuccess: () => {
      notification.success({
        message: t('Event has been updated'),
      });
      form.resetFields();
      setOpen(false);
      queryClient.invalidateQueries('FindUserEvents');
    },
  });

  const Option = Select.Option;

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={({ title, description, dates, maxParticipants, type }) => {
        if (initialValues.id) {
          updateEventMutation.mutate({
            id: initialValues.id,
            title,
            description,
            startDate: dates[0].format('YYYY-MM-DD HH:mm'),
            endDate: dates[1].format('YYYY-MM-DD HH:mm'),
            maxParticipants: parseInt(maxParticipants, 10),
            type,
          });
        } else {
          createEventMutation.mutate({
            title,
            description,
            startDate: dates[0].format('YYYY-MM-DD HH:mm'),
            endDate: dates[1].format('YYYY-MM-DD HH:mm'),
            maxParticipants: parseInt(maxParticipants, 10),
            type,
            // TODO: set lat and lng from API
            lat: 0,
            lng: 0,
            eventAddress: {
              city: '',
              state: '',
              postalCode: '',
              countryCode: '',
              countryName: '',
              county: '',
              district: '',
              label: '',
            },
          });
        }
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
          disabledDate={(d) =>
            d.isBefore(dayjs().add(1, 'day').format('YYYY-MM-DD'))
          }
        />
      </Form.Item>
      <Form.Item
        name="type"
        rules={[
          {
            required: false,
            message: t('Select event type'),
          },
        ]}
      >
        <Select placeholder={t('Event type')} className="ml-auto">
          {getMapEventTypes.map((el, index) => {
            return (
              <Option key={index} value={index}>
                {t(`${el}`)}
              </Option>
            );
          })}
        </Select>
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
