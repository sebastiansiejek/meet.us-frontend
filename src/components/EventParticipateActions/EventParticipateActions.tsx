import React, { useEffect, useMemo, useState } from 'react';
import { Button, notification as AntdNotification } from 'antd';
import { useTranslation } from 'next-i18next';
import {
  useParticipateInEventMutation,
  useSingleUserQuery,
} from '../../generated/gqlQueries';
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

export interface ISetPeopleCountArgs {
  goingCount?: number;
  interestedCount?: number;
}

export interface EventParticipateActionsProps
  extends Required<ISetPeopleCountArgs> {
  eventId: string;
  participantType: IEventParticipant;
  setPeopleCount: ({
    goingCount,
    interestedCount,
  }: ISetPeopleCountArgs) => void;
}

function EventParticipateActions({
  eventId,
  participantType,
  setPeopleCount,
  goingCount,
  interestedCount,
}: EventParticipateActionsProps) {
  const participateInEventMutation = useParticipateInEventMutation();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [activeType, setActiveType] =
    useState<IEventParticipant>(participantType);

  const [goingCountState, setGoingCountState] = useState(goingCount || 0);
  const [interestedCountState, setInterestedCountState] = useState(
    interestedCount || 0,
  );

  useEffect(() => {
    setPeopleCount({
      goingCount: goingCountState,
      interestedCount: interestedCountState,
    });
  }, [goingCountState, interestedCountState]);

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
                    const currentType = res.participateInEvent.type;

                    AntdNotification.info({
                      message:
                        currentType > 0
                          ? t(notificationUp)
                          : t(notificationCancel),
                    });

                    if (currentType === 0) {
                      if (type === 1) {
                        setInterestedCountState(interestedCountState - 1);
                      }

                      if (type === 2) {
                        setGoingCountState(goingCountState - 1);
                      }
                    }

                    if (currentType > 0) {
                      if (type === 1) {
                        setInterestedCountState(interestedCountState + 1);
                      }

                      if (type === 2) {
                        setGoingCountState(goingCountState + 1);
                      }
                    }

                    queryClient
                      .invalidateQueries([
                        useSingleUserQuery.getKey({
                          id: eventId,
                        })[0],
                        {
                          id: eventId,
                        },
                      ])
                      .then(() =>
                        setActiveType(currentType as IEventParticipant),
                      );
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
