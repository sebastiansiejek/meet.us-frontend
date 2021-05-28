import React from 'react';
import { PageHeader as AntdHeader } from 'antd';
import { useTranslation } from 'react-i18next';

export interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => {
  const { t } = useTranslation();

  return <AntdHeader title={<h1 className="text-5xl">{t(title)}</h1>} />;
};

export default PageHeader;
