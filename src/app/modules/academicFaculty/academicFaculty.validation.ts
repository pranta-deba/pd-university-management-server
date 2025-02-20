import { z } from 'zod';

const UpdateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
});

const CreateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
});

export const AcademicFacultyValidation = {
  CreateAcademicFacultyValidationSchema,
  UpdateAcademicFacultyValidationSchema,
};
