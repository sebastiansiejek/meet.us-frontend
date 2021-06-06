import React from 'react';
import dayjs from 'dayjs';
import { Footer } from 'antd/lib/layout/layout';

export interface SiteFooterProps {}

const SiteFooter: React.FunctionComponent<SiteFooterProps> = ({}) => {
  const date = dayjs();

  return (
    <Footer className="text-center mt-20">meet.us &copy;{date.year()}</Footer>
  );
};

export default SiteFooter;
