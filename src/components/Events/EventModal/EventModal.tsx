import React from 'react';
import EventForm from 'src/components/Events/EventForm';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface EventModalProps {}

const EventModal: React.FunctionComponent<EventModalProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Modal
        title={t('Add event')}
        visible={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        cancelText={t('Cancel')}
        footer=""
      >
        <EventForm setOpen={setOpen} />
      </Modal>
      <Button type="primary" onClick={() => setOpen(true)}>
        {t('Add event')}
      </Button>
    </>
  );
};

export default EventModal;
