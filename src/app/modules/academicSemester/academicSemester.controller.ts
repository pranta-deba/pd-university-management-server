/* eslint-disable prettier/prettier */
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  //   const result = await UserServices.createStudentIntoDB(password, studentData);
  //   sendResponse(res, {
  //     statusCode: status.OK,
  //     success: true,
  //     message: 'Student is created successfully.',
  //     data: result,
  //   });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
