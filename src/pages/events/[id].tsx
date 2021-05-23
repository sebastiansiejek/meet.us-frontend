import Container from 'src/components/Container';
import dayjs from 'dayjs';
import { Typography } from 'antd';
import { useSingleEventPageQuery } from 'src/generated/gqlQueries';
import { ClockCircleTwoTone } from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';

interface IEventPage {
  id: string;
}

const Event: React.FC<IEventPage> = ({ id }) => {
  const { data } = useSingleEventPageQuery({
    id,
  });

  if (data && data.event) {
    const { event } = data;
    console.log(event);

    const { title, description, startDate, endDate, user } = event;
    const { Title, Paragraph } = Typography;

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
        {/* {maxParticipants && <Paragraph>{maxParticipants}</Paragraph>} */}
        {/* <Paragraph>{user.firstName}</Paragraph> */}
      </Container>
    );
  }

  return <></>;
};

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => ({ props: { id: params.id } });

export default Event;
