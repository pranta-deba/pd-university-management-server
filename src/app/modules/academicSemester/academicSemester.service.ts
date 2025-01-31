/* eslint-disable prettier/prettier */
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // handle duplicate semester
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAcademicSemestersIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};

const updateSingleAcademicSemesterIntoDB = async (
  payload: TAcademicSemester,
  id: string,
) => {
  const result = await AcademicSemester.findByIdAndUpdate({ _id: id }, payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemestersIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateSingleAcademicSemesterIntoDB,
};
