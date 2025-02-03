/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong!';

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];
  let errorSource: TErrorSource = [
    {
      path: '',
      message: 'something went wrong!',
    },
  ];

  if (err instanceof ZodError) {
    statusCode = 
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    // error: err,
  });
};

export default globalErrorHandler;
