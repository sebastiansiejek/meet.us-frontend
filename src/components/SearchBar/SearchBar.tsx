import { AutoComplete, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEventsSuggestionsQuery } from 'src/generated/gqlQueries';
import { eventCategoryIcons } from 'src/utils/events';
import Image from 'next/image';
import Link from 'next/link';
import { debounce } from 'lodash';
import { routes } from 'src/routes/routes';

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
      state: 'FUTURE',
    },
    {
      enabled: query.length >= 3,
    },
  );

  const options =
    eventsQuery.data?.events &&
    eventsQuery.data?.events.page.edges?.map(({ node }) => {
      const title = node?.title || '';
      const id = node?.id || '';
      const type = parseInt(`${node?.type}`);
      const eventCategoryIcon = eventCategoryIcons[type as 0 | 1];

      return {
        value: title,
        label: (
          <Link href={routes.events.href + `/${id}`} passHref>
            <a>
              <div className="flex items-center">
                {eventCategoryIcon && (
                  <div className="mr-2">
                    <Image
                      src={eventCategoryIcon}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                )}
                {title}
              </div>
            </a>
          </Link>
        ),
      };
    });

  const search = (query: string) => {
    router.push({
      pathname: routes.events.href,
      query: {
        q: query,
      },
    });
  };

  useEffect(() => {
    setQuery(value);
  }, [value]);

  return (
    <div>
      <AutoComplete
        style={{ width: '100%' }}
        options={options || []}
        value={query}
        onChange={debounce((value: string) => {
          setQuery(value);
        }, 50)}
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
    </div>
  );
};

export default SearchBar;
