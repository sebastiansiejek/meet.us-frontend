import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { useParticipantsByDateQuery } from 'src/generated/gqlQueries';

export interface EventStatisticsProps {
  eventId: string;
}

const EventStatistics: React.FunctionComponent<EventStatisticsProps> = ({
  eventId,
}) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const participantsByDateQueryData = useParticipantsByDateQuery(
    {
      eventId,
    },
    {
      enabled: isModalVisible,
    },
  ).data?.participantsByDate;

  console.log(participantsByDateQueryData);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        {t('See')}
      </Button>
      <Modal
        title={t('Statistics')}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
};

export default EventStatistics;
