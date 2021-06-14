import React from 'react';
import EventForm from 'src/components/Events/EventForm';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
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

  let eventQuery = null;
  if (id && isEdit) {
    eventQuery = useSingleEventPageQuery({ id: id });
  }

  const title = isEdit ? t('Edit event') : t('Add event');

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
        <EventForm
          initialValues={{
            ...((eventQuery?.data?.event &&
              formatResponse(eventQuery?.data?.event)) as any),
          }}
          setOpen={setOpen}
        />
      </Modal>
      <Button type="primary" onClick={() => setOpen(true)}>
        {title}
      </Button>
    </>
  );
};

export default EventModal;
