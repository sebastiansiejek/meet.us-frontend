// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import { notification, Typography } from 'antd';
import {
  useRateEventMutation,
  useSingleEventPageQuery,
} from 'src/generated/gqlQueries';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from 'react-query';
import { useState } from 'react';

export interface EventRatingProps {
  rate: number;
  eventId: string;
  showInput: boolean;
}

const EventRating: React.FunctionComponent<EventRatingProps> = ({
  rate,
  eventId,
  showInput,
}) => {
  const rateEventMutation = useRateEventMutation();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [isRated, setRated] = useState(false);

  return (
    <>
      {rate > 0 && (
        <div>
          <Typography.Title level={2}>{t('Event rating')}</Typography.Title>
          <ReactStars count={5} edit={false} value={rate} />
        </div>
      )}
      {showInput && !isRated && (
        <div>
          <Typography.Title level={2}>{t('Rate event')}</Typography.Title>
          <ReactStars
            count={5}
            onChange={(rating: number) => {
              rateEventMutation
                .mutateAsync({
                  eventId,
                  rate: rating,
                })
                .then(() => {
                  queryClient
                    .invalidateQueries(
                      useSingleEventPageQuery.getKey({
                        id: eventId,
                      }),
                      {
                        refetchInactive: true,
                      },
                    )
                    .then(() => {
                      notification.info({
                        message: t('You rating has been added'),
                      });
                      setRated(true);
                    });
                });
            }}
          />
        </div>
      )}
    </>
  );
};

export default EventRating;
