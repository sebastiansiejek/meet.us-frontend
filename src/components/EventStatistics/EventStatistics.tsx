import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useParticipantsByDateQuery } from 'src/generated/gqlQueries';
import { Bar } from 'react-chartjs-2';
import randomcolor from 'randomcolor';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const datasets = useMemo(
    () =>
      participantsByDateQueryData?.map((item) => {
        return {
          label: t('Participants'),
          backgroundColor: randomcolor({
            luminosity: 'bright',
            format: 'rgb',
          }),
          data: [item.count],
        };
      }),
    [participantsByDateQueryData],
  ) as any;

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
      >
        {participantsByDateQueryData && participantsByDateQueryData.length > 0 && (
          <Bar
            data={{
              labels: participantsByDateQueryData.map((item) => item.date),
              datasets,
            }}
            options={{
              scales: {
                yAxis: {
                  ticks: {
                    precision: 0,
                  },
                },
              },
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: t('Number of participants in days'),
                },
              },
            }}
          />
        )}
      </Modal>
    </>
  );
};

export default EventStatistics;
