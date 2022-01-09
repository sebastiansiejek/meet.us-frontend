import React from 'react';
import { Button, notification as AntdNotification } from 'antd';
import { useTranslation } from 'next-i18next';
import { useParticipateInEventMutation } from '../../generated/gqlQueries';
import { IEventParticipant } from 'src/types/IEvent';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useQueryClient } from 'react-query';

const options = [
  {
    type: 1,
    label: 'Follow',
    notification: 'You are following event',
  },
  {
    type: 2,
    label: 'Join',
    notification: 'You joined to event',
  },
];

function EventParticipateActions({
  eventId,
  participantType,
}: {
  eventId: string;
  participantType: IEventParticipant;
}) {
  const participateInEventMutation = useParticipateInEventMutation();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return (
    <div className={'flex flex-wrap -mr-2 -ml-2'}>
      {options
        .filter(
          ({ type }) =>
            (participantType === 2 && type === 2) || participantType !== 2,
        )
        .map(({ type, notification, label }) => (
          <div className="mr-2 ml-2" key={type}>
            <Button
              loading={participateInEventMutation.isLoading}
              icon={participantType === type && <CheckCircleTwoTone />}
              className="flex items-center"
              onClick={() => {
                participateInEventMutation
                  .mutateAsync({
                    type: participantType === type ? 0 : type,
                    eventId,
                  })
                  .then(() => {
                    if (type > 0) {
                      AntdNotification.info({
                        message: t(notification),
                      });
                    }
                    queryClient.invalidateQueries([
                      'SingleEventPage',
                      {
                        id: eventId,
                      },
                    ]);
                  });
              }}
              type={'primary'}
            >
              {t(label)}
            </Button>
          </div>
        ))}
    </div>
  );
}

export default EventParticipateActions;
