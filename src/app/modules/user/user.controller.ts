import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // const zodParseData = studentValidationSchema.parse(studentData);
  const result = await UserServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student is created successfully.',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
