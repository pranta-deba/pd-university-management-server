/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { OfferedCourseServices } from './OfferedCourse.service';

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Offered Course is created successfully !',
    data: result,
  });
});
