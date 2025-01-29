import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    // // data validation using zod
    // const zodParseData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student is created successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
