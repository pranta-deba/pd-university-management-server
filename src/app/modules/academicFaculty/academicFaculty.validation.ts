/* eslint-disable prettier/prettier */
import { z } from 'zod';

const UpdateAcademicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic Faculty must be a string',
  }),
});
const CreateAcademicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic Faculty must be a string',
  }),
});
export const AcademicFacultyValidation = {
  CreateAcademicFacultyValidationSchema,
  UpdateAcademicFacultyValidationSchema,
};
