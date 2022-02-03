import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { eventsTypes } from 'src/utils/events';
import CardLink from '../CardLink';
import Party from '../../assets/images/party.svg';
import Sport from '../../assets/images/sport.svg';
import Conversation from '../../assets/images/conversation.svg';
import { routes } from 'src/routes/routes';
import { Col, Row } from 'antd';
import Image from 'next/image';

export interface EventTypeTilesProps {}

const EventTypeTiles: React.FunctionComponent<EventTypeTilesProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Title level={2} className="text-center">
        {t('Event categories')}
      </Title>
      <Row gutter={16}>
        {eventsTypes.map(({ name, id, icon }) => {
          return (
            <Col key={id} span={24} sm={12} lg={8}>
              <CardLink
                key={id}
                linkProps={{
                  href: `${routes.events.href}?type=${id}`,
                  passHref: true,
                }}
                cardProps={{
                  title: (
                    <div className="flex items-center justify-between">
                      <span className="mr-2">{t(name)}</span>
                      <Image src={icon} width={20} height={20} alt={name} />
                    </div>
                  ),
                  cover: (
                    <>
                      {id === 0 && <Sport />}
                      {id === 1 && <Party />}
                      {id === 2 && <Conversation />}
                    </>
                  ),
                }}
              ></CardLink>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default EventTypeTiles;
