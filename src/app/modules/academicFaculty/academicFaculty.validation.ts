/* eslint-disable prettier/prettier */
import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic Faculty must be a string',
  }),
});
export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
};
