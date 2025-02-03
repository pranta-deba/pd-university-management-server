import { z } from 'zod';

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First name must start with an uppercase letter',
    }),
  middleName: z.string().max(20).trim().optional(),
  lastName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must only contain alphabetic characters',
    }),
});

// Define Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1).trim(),
  fatherOccupation: z.string().min(1).trim(),
  fatherContactNo: z.string().min(1).trim(),
  motherName: z.string().min(1).trim(),
  motherOccupation: z.string().min(1).trim(),
  motherContactNo: z.string().min(1).trim(),
});

// Define Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1).trim(),
  Occupation: z.string().min(1).trim(),
  ContactNo: z.string().min(1).trim(),
  address: z.string().min(1).trim(),
});

// Define Zod schema for Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
