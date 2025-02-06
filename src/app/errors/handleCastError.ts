/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

/* eslint-disable prettier/prettier */
const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSource: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID!',
    errorSource,
  };
};

export default handleCastError;
