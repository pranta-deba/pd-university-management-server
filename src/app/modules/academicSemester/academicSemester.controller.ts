/* eslint-disable prettier/prettier */
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

// create semester
const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester is created successfully.',
    data: result,
  });
});
// get all semester
const getAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemestersIntoDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semesters are retrieved successfully.',
    data: result,
  });
});
// get single semester
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester is retrieved successfully.',
    data: result,
  });
});
// update single semester
const updateSingleAcademicSemester = catchAsync(async (req, res) => {
  const result =
    await AcademicSemesterServices.updateSingleAcademicSemesterIntoDB(
      req.body,
      req.params.id,
    );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester is updated successfully.',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
