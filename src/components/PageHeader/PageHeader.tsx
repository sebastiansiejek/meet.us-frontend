import React from 'react';
import { PageHeader as AntdHeader } from 'antd';
import { useTranslation } from 'react-i18next';

export interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <AntdHeader
      className="mb-14"
      title={<h1 className="text-6xl">{t(title)}</h1>}
    />
  );
};

export default PageHeader;
