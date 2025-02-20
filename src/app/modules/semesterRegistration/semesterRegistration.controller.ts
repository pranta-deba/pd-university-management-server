/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { SemesterRegistrationService } from './semesterRegistration.service';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.createSemesterRegistrationIntoDB(
        req.body,
      );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester Registration is created successfully!',
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsync(
    async (req: Request, res: Response) => {
      const result =
        await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(
          req.query,
        );
  
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Semester Registration is retrieved successfully !',
        data: result,
      });
    },
  );


  const getSingleSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
  
      const result =
        await SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(
          id,
        );
  
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Semester Registration is retrieved successfully',
        data: result,
      });
    },
  );


  const updateSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const result =
        await SemesterRegistrationService.updateSemesterRegistrationIntoDB(
          id,
          req.body,
        );
  
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Semester Registration is updated successfully',
        data: result,
      });
    },
  );


  const deleteSemesterRegistration = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const result =
        await SemesterRegistrationService.deleteSemesterRegistrationFromDB(id);
  
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Semester Registration is updated successfully',
        data: result,
      });
    },
  );
  
