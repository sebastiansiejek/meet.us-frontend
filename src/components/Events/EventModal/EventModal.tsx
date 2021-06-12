import React from 'react';
import EventForm from 'src/components/Events/EventForm';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface EventModalProps {
  isEdit?: boolean;
  id?: string;
}

const EventModal: React.FunctionComponent<EventModalProps> = ({
  isEdit = false,
}) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

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
        <EventForm setOpen={setOpen} />
      </Modal>
      <Button type="primary" onClick={() => setOpen(true)}>
        {title}
      </Button>
    </>
  );
};

export default EventModal;
