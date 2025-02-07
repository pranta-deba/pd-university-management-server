/* eslint-disable prettier/prettier */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

/* eslint-disable prettier/prettier */
const handleDuplicateError = (err: any): TGenericErrorResponse => {

  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSource: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists!`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID!',
    errorSource,
  };
};

export default handleDuplicateError;
