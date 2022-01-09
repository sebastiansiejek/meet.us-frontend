import {
  Form,
  Input,
  Button,
  DatePicker,
  notification,
  Select,
  Spin,
} from 'antd';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormOutput from 'src/components/Form/FormOutput';
import {
  SingleEventPageQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
} from 'src/generated/gqlQueries';
import useInvalidateEventQueries from 'src/hooks/useInvalidateEventQueries';
import useGeocodeSearchQuery from 'src/queries/useGeocodeSearchQuery';
import { IGeocodeSearchApiGetItem } from 'src/services/api/here/GeocodeSearchApi';
import { IApiError } from 'src/types/IApiError';
import { getMapEventTypes } from 'src/types/IEvent';

export interface EventFormProps {
  setOpen: Function;
  initialValues: SingleEventPageQuery['event'] | any;
}

const EventForm: React.FunctionComponent<EventFormProps> = ({
  setOpen,
  initialValues,
}) => {
  const invalidationEventQueries = useInvalidateEventQueries();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { t } = useTranslation();
  const [searchPlaceString, setSearchPlaceString] = useState();
  const [place, setPlace] = useState<IGeocodeSearchApiGetItem>({
    address: initialValues.eventAddress,
  } as any);

  const onSuccessHandler = () => {
    invalidationEventQueries.invalidate();
    setOpen(false);
  };

  const createEventMutation = useCreateEventMutation({
    onSuccess: () => {
      form.resetFields();
      notification.success({
        message: t('Event has been created'),
      });
      onSuccessHandler();
    },
  });

  const updateEventMutation = useUpdateEventMutation({
    onSuccess: () => {
      notification.success({
        message: t('Event has been updated'),
      });
      onSuccessHandler();
    },
  });

  const Option = Select.Option;

  const geocodeSearchQuery = useGeocodeSearchQuery(
    {
      q: searchPlaceString,
    },
    {
      enabled: !!searchPlaceString,
    },
  );

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={({ title, description, dates, maxParticipants, type }) => {
        if (place) {
          const params = {
            title,
            description,
            startDate: dates[0].format('YYYY-MM-DD HH:mm'),
            endDate: dates[1].format('YYYY-MM-DD HH:mm'),
            maxParticipants: parseInt(maxParticipants, 10),
            type,
            lat: place?.position?.lat || initialValues.lat,
            lng: place?.position?.lng || initialValues.lng,
            eventAddress: {
              city: place.address.city || '',
              state: place.address.state || '',
              postalCode: place.address.postalCode || '',
              countryCode: place.address.countryCode || '',
              countryName: place.address.countryName || '',
              county: place.address.county || '',
              district: place.address.district || '',
              label: place.address.label,
            },
          };

          if (initialValues.id) {
            updateEventMutation.mutate({ id: initialValues.id, ...params });
          } else {
            createEventMutation.mutate(params);
          }
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
        name="placeLabel"
        rules={[
          {
            required: true,
            message: t('Select event place'),
          },
        ]}
      >
        <Select
          options={geocodeSearchQuery.data?.data.items.map((place: any) => {
            const { title } = place;

            return {
              label: title,
              value: title,
            };
          })}
          filterOption={false}
          showSearch
          notFoundContent={
            geocodeSearchQuery.isLoading ? <Spin size="small" /> : null
          }
          onSelect={(value) => {
            const selectedPlace = geocodeSearchQuery.data?.data.items.find(
              (item) => item.title === value,
            );
            if (selectedPlace) {
              setPlace(selectedPlace);
            }
          }}
          loading={geocodeSearchQuery.isLoading}
          placeholder={t('Event place')}
          onSearch={debounce((value) => {
            setSearchPlaceString(value);
          }, 300)}
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
        loading={createEventMutation.isLoading || updateEventMutation.isLoading}
      >
        {t('Save')}
      </Button>
    </Form>
  );
};

export default EventForm;
