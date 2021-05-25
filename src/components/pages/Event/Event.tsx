import Container from 'src/components/Container';
import dayjs from 'dayjs';
import { Typography } from 'antd';
import { ClockCircleTwoTone, UsergroupAddOutlined } from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';
import UserCard from 'src/components/User/UserCard';
import { useTranslation } from 'react-i18next';
import { SingleEventPageQuery } from 'src/generated/gqlQueries';

export interface EventProps {
  data: SingleEventPageQuery;
}

const Event: React.FunctionComponent<EventProps> = ({ data }) => {
  const { Title, Paragraph } = Typography;
  const { t } = useTranslation();

  const { event } = data;

  const {
    title,
    description,
    startDate,
    endDate,
    user,
    maxParticipants,
  } = event;

  const { firstName, lastname, nickname, id } = user;

  const startDateFormat = dayjs(startDate).format('D MMMM YYYY HH:MM');
  const endDateFormat = dayjs(endDate).format('D MMMM YYYY HH:MM');
  dayjs.extend(relativeTime);

  const fromNow = dayjs(startDate).fromNow();

  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Paragraph>
        <ClockCircleTwoTone />
        {fromNow}
        <div>
          <time>{startDateFormat}</time>
          <span> - </span>
          <time>{endDateFormat}</time>
        </div>
      </Paragraph>
      {maxParticipants && (
        <Paragraph>
          <UsergroupAddOutlined />
          {t('Maximum members')}: {maxParticipants}
        </Paragraph>
      )}
      <UserCard
        nickname={nickname}
        firstName={firstName}
        lastName={lastname}
        id={id}
      />
    </Container>
  );
};

export default Event;
