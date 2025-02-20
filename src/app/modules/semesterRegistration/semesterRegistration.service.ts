/* eslint-disable prettier/prettier */
import { TSemesterRegistration } from './semesterRegistration.interface';

/* eslint-disable prettier/prettier */
const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {};

const getAllSemesterRegistrationsFromDB = async (
  query: Record<string, unknown>,
) => {};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {}

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB
};
