import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: result,
  });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {});

const refreshToken = catchAsync(async (req: Request, res: Response) => {});

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
};
