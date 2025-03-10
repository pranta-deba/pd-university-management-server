import status from 'http-status';
import { OfferedCourse } from '../OfferedCourse/OfferedCourse.model';
import { TEnrolledCourse } from './enrolledCourse.interface';
import AppError from '../../errors/AppError';
import { Student } from '../student/student.model';
import EnrolledCourse from './enrolledCourse.model';

const createEnrolledCourseIntoDB = async (
  userId: string,
  payload: TEnrolledCourse,
) => {
  const { offeredCourse } = payload;

  // Step1: Check if the offered courses is exists
  const isOfferedCourseExists = await OfferedCourse.findById(offeredCourse);

  if (!isOfferedCourseExists) {
    throw new AppError(status.NOT_FOUND, 'Offered course not found !');
  }

  // Step2: Check if offered course max capacity is exceeded
  if (isOfferedCourseExists.maxCapacity <= 0) {
    throw new AppError(status.BAD_GATEWAY, 'Room is full !');
  }

  // Step3: Check if the student is already enrolled
  const student = await Student.findOne({ id: userId }, { _id: 1 });
  if (!student) {
    throw new AppError(status.NOT_FOUND, 'Student not found !');
  }

  const isStudentAlreadyEnrolled = await EnrolledCourse.findOne({
    semesterRegistration: isOfferedCourseExists?.semesterRegistration,
    offeredCourse,
    student: student._id,
  });

  if (isStudentAlreadyEnrolled) {
    throw new AppError(status.CONFLICT, 'Student is already enrolled !');
  }

  // Step4: Check if the max credits exceed
  // Step5: Create an enrolled course
  const result = await EnrolledCourse.create([
    {
      semesterRegistration: isOfferedCourseExists.semesterRegistration,
      academicSemester: isOfferedCourseExists.academicSemester,
      academicFaculty: isOfferedCourseExists.academicFaculty,
      academicDepartment: isOfferedCourseExists.academicDepartment,
      offeredCourse: offeredCourse,
      course: isOfferedCourseExists.course,
      student: student._id,
      faculty: isOfferedCourseExists.faculty,
      isEnrolled: true,
    },
  ]);
  if (!result) {
    throw new AppError(status.BAD_REQUEST, 'Failed to enroll in this course !');
  }
};

const updateEnrolledCourseMarksIntoDB = async () => {};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  updateEnrolledCourseMarksIntoDB,
};
