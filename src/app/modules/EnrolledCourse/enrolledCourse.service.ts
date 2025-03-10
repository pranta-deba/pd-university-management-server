import status from 'http-status';
import { OfferedCourse } from '../OfferedCourse/OfferedCourse.model';
import { TEnrolledCourse } from './enrolledCourse.interface';
import AppError from '../../errors/AppError';

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

  // Step2: Check if the student is already enrolled
  // Step3: Check if the max credits exceed
  // Step4: Create an enrolled course
};

const updateEnrolledCourseMarksIntoDB = async () => {};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  updateEnrolledCourseMarksIntoDB,
};
