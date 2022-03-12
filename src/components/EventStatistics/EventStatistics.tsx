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
import { useEventStatisticsQuery } from 'src/generated/gqlQueries';
import { Bar } from 'react-chartjs-2';
import randomcolor from 'randomcolor';
import EventViewsCount from '../EventViewsCount';

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

  const eventStatisticsQuery = useEventStatisticsQuery(
    {
      eventId,
    },
    {
      enabled: isModalVisible,
    },
  );

  const participantsByDateQueryData =
    eventStatisticsQuery.data?.participantsByDate;

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
        {eventStatisticsQuery.data?.event.visitCount && (
          <EventViewsCount
            visitCount={eventStatisticsQuery.data.event.visitCount}
          />
        )}
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
