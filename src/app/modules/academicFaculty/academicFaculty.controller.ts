import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.service';

// create Faculty
const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Faculty is created successfully.',
    data: result,
  });
});
// get all Faculty
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB(
    req.query,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Faculties are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});
// get single Faculty
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Faculty is retrieved successfully',
    data: result,
  });
});
// update single Faculty
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Faculty is updated successfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
