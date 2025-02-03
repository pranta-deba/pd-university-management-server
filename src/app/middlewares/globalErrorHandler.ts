/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../config';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong!';

  let errorSource: TErrorSource = [
    {
      path: '',
      message: 'something went wrong!',
    },
  ];

  const handleZodError = (err: ZodError) => {
    const errorSource: TErrorSource = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    const statusCode = 400;

    return {
      statusCode,
      message: 'zod error',
      errorSource,
      stack: config.node_env === 'development' ? err?.stack : null,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSource = simplifiedError.errorSource;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
  });
};

export default globalErrorHandler;
