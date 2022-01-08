import React from 'react';
import { Button, notification } from 'antd';
import { useTranslation } from 'next-i18next';
import { useParticipateInEventMutation } from '../../generated/gqlQueries';

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

function EventParticipateActions({ eventId }: { eventId: string }) {
  const participateInEventMutation = useParticipateInEventMutation();
  const { t } = useTranslation();

  return (
    <div className={'flex flex-wrap -mr-2 -ml-2'}>
      {options.map((option) => (
        <div className="mr-2 ml-2" key={option.type}>
          <Button
            loading={participateInEventMutation.isLoading}
            onClick={() => {
              participateInEventMutation
                .mutateAsync({
                  type: option.type,
                  eventId,
                })
                .then(() => {
                  notification.info({
                    message: t(option.notification),
                  });
                });
            }}
            type={'primary'}
          >
            {t(option.label)}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default EventParticipateActions;
