import { z } from 'zod';

const UpdateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be a string',
      required_error: 'Name is required',
    }),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic department must be a string',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});

const CreateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be a string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic department must be a string',
      required_error: 'Faculty is required',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  CreateAcademicDepartmentValidationSchema,
  UpdateAcademicDepartmentValidationSchema,
};
