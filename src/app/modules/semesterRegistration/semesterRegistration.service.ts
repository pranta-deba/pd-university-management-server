/* eslint-disable prettier/prettier */
import status from 'http-status';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import AppError from '../../errors/AppError';

/* eslint-disable prettier/prettier */
const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  // checking if the semester is exists
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemesterExists) {
    throw new AppError(status.NOT_FOUND, 'This academic semester not found !');
  }
};

const getAllSemesterRegistrationsFromDB = async (
  query: Record<string, unknown>,
) => {};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {};

const deleteSemesterRegistrationFromDB = async (id: string) => {};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
  deleteSemesterRegistrationFromDB,
};
