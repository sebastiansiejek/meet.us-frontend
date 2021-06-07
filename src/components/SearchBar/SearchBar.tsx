import { AutoComplete, Input } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface SearchBarProps {
  value?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ value = '' }) => {
  const { Search } = Input;
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <AutoComplete style={{ width: '100%' }} defaultValue={value}>
      <Search
        placeholder={t('Search')}
        size="large"
        onSearch={(q) => {
          if (q)
            router.push({
              pathname: 'events',
              query: {
                q,
              },
            });
        }}
      />
    </AutoComplete>
  );
};

export default SearchBar;
