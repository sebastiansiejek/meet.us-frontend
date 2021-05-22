import { Alert } from 'antd';
import React from 'react';
import { IApiError } from 'src/types/IApiError';

export interface FormOutputProps {
  error: IApiError;
}

const FormOutput: React.FunctionComponent<FormOutputProps> = ({ error }) => {
  return (
    <>
      {error?.data?.message &&
        Array.isArray(error.data.message) &&
        error.data.message.map((error) => (
          <Alert message={error} type="error" key={error} />
        ))}
      {error?.data?.message && !Array.isArray(error.data.message) && (
        <Alert message={error.data.message} type="error" />
      )}
    </>
  );
};

export default FormOutput;
