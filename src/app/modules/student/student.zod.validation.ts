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
const studentValidationSchema = z.object({
  id: z.string().uuid(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
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
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
