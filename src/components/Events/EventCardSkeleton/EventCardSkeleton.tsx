import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EventCardSkeleton = () => {
  return (
    <div>
      <Skeleton />
      <Skeleton height={150} />
      <Skeleton />
      <Skeleton height={20} />
    </div>
  );
};

export default EventCardSkeleton;
