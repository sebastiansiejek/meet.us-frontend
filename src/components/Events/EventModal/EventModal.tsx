import React from 'react';
import EventForm from 'src/components/Events/EventForm';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSingleEventPageQuery } from 'src/generated/gqlQueries';
import { formatResponse } from './formatResponse';

export interface EventModalProps {
  isEdit?: boolean;
  id?: string;
}

const EventModal: React.FunctionComponent<EventModalProps> = ({
  isEdit = false,
  id,
}) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const eventQuery = useSingleEventPageQuery(
    { id: id ? id : '' },
    {
      enabled: !!id && isOpen,
    },
  );

  const title = isEdit ? t('Edit event') : t('Add event');
  const tags = eventQuery?.data?.event?.tags || [];

  return (
    <>
      <Modal
        title={title}
        visible={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        cancelText={t('Cancel')}
        footer=""
      >
        {((isEdit && eventQuery?.data?.event) || !isEdit) && (
          <EventForm
            initialValues={{
              ...((eventQuery?.data?.event &&
                formatResponse({
                  ...eventQuery.data.event,
                  placeLabel: eventQuery.data.event?.eventAddress?.label,
                  tags: tags.map((tag: any) => {
                    return {
                      label: tag.name,
                      value: tag.id,
                    };
                  }),
                } as any)) as any),
            }}
            setOpen={setOpen}
          />
        )}
      </Modal>
      <Button type="primary" onClick={() => setOpen(true)}>
        {title}
      </Button>
    </>
  );
};

export default EventModal;
