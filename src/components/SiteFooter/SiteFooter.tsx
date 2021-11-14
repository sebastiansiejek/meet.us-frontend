import React from 'react';
import dayjs from 'dayjs';
import { Layout } from 'antd';

const Footer = Layout.Footer;

const SiteFooter: React.FunctionComponent = () => {
  const date = dayjs();

  return (
    <Footer className="text-center mt-20">meet.us &copy;{date.year()}</Footer>
  );
};

export default SiteFooter;
