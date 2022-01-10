import { AutoComplete, Input } from 'antd';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEventsSuggestionsQuery } from 'src/generated/gqlQueries';
import { eventCategoryIcons } from 'src/utils/events';
import Image from 'next/image';

export interface SearchBarProps {
  value?: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ value = '' }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [query, setQuery] = useState(value);

  const eventsQuery = useEventsSuggestionsQuery(
    {
      query,
      first: 5,
    },
    {
      enabled: query.length >= 3,
    },
  );

  const options =
    eventsQuery.data?.events &&
    eventsQuery.data?.events.page.edges?.map(({ node }) => {
      const title = node?.title || '';
      const type = parseInt(`${node?.type}`);
      const eventCategoryIcon = eventCategoryIcons[type as 0 | 1];

      return {
        value: title,
        label: (
          <div className="flex items-center">
            {eventCategoryIcon && (
              <div className="mr-2">
                <Image src={eventCategoryIcon} width={20} height={20} alt="" />
              </div>
            )}
            {title}
          </div>
        ),
      };
    });

  const search = (query: string) => {
    router.push({
      pathname: 'events',
      query: {
        q: query,
      },
    });
  };

  return (
    <AutoComplete
      style={{ width: '100%' }}
      defaultValue={value}
      options={options || []}
      onChange={debounce((value: string) => {
        setQuery(value);
      }, 150)}
      onSelect={(value) => {
        search(value);
      }}
    >
      <Input.Search
        size="large"
        placeholder={`${t('Event')}...`}
        enterButton
        type={'submit'}
        loading={eventsQuery.isLoading}
        onSearch={() => {
          search(query);
        }}
      />
    </AutoComplete>
  );
};

export default SearchBar;
function clg(arg0: string) {
  throw new Error('Function not implemented.');
}
