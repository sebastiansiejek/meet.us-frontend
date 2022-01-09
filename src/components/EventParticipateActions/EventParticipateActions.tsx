import React, { useMemo, useState } from 'react';
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
    notificationUp: 'You are following event',
    notificationCancel: 'You unfollowed this event',
  },
  {
    type: 2,
    label: 'Join',
    notificationUp: 'You joined to event',
    notificationCancel: 'You left this event',
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
  const [activeType, setActiveType] =
    useState<IEventParticipant>(participantType);

  const filteredOptions = useMemo(
    () =>
      options.filter(
        ({ type }) => (activeType === 2 && type === 2) || activeType !== 2,
      ),
    [activeType],
  );

  return (
    <div className={'flex flex-wrap -mr-2 -ml-2'}>
      {filteredOptions.map(
        ({ type, notificationUp, notificationCancel, label }) => (
          <div className="mr-2 ml-2" key={type}>
            <Button
              loading={participateInEventMutation.isLoading}
              icon={activeType === type && <CheckCircleTwoTone />}
              className="flex items-center"
              onClick={() => {
                participateInEventMutation
                  .mutateAsync({
                    type: activeType === type ? 0 : type,
                    eventId,
                  })
                  .then((res) => {
                    const { type } = res.participateInEvent;

                    AntdNotification.info({
                      message:
                        type > 0 ? t(notificationUp) : t(notificationCancel),
                    });

                    queryClient
                      .invalidateQueries([
                        'SingleEventPage',
                        {
                          id: eventId,
                        },
                      ])
                      .then(() => setActiveType(type as IEventParticipant));
                  });
              }}
              type={'primary'}
            >
              {t(label)}
            </Button>
          </div>
        ),
      )}
    </div>
  );
}

export default EventParticipateActions;
