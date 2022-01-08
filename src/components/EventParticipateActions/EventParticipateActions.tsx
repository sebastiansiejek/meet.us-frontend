import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import { useParticipateInEventMutation } from '../../generated/gqlQueries';

const options = [
  {
    type: 1,
    label: 'Follow',
  },
  {
    type: 2,
    label: 'Join',
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
              participateInEventMutation.mutate({
                type: option.type,
                eventId: eventId,
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
