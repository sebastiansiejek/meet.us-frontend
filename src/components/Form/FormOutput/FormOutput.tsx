import { Alert } from 'antd';
import React from 'react';
import { IApiError } from 'src/types/IApiError';
import { useTranslation } from 'react-i18next';

export interface FormOutputProps {
  error: IApiError;
}

const FormOutput: React.FunctionComponent<FormOutputProps> = ({ error }) => {
  const { t } = useTranslation();

  return (
    <>
      {error?.data?.message &&
        Array.isArray(error.data.message) &&
        error.data.message.map((error) => (
          <Alert message={t(error)} type="error" key={error} />
        ))}
      {error?.data?.message && !Array.isArray(error.data.message) && (
        <Alert message={t(error.data.message)} type="error" />
      )}
    </>
  );
};

export default FormOutput;
