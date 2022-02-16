import Paragraph from 'antd/lib/typography/Paragraph';
import { EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

export interface EventViewsCountProps {
  visitCount: number;
}

const EventViewsCount = ({ visitCount }: EventViewsCountProps) => {
  const { t } = useTranslation();

  return (
    <>
      {visitCount && (
        <Paragraph className="flex items-center">
          <EyeOutlined className="mr-3 mb-0" />
          {t('Views')}: {visitCount}
        </Paragraph>
      )}
    </>
  );
};

export default EventViewsCount;
