import Joi from 'joi';

// Define Joi schema for UserName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().max(20).messages({
    'string.empty': 'First name is required',
    'string.max': 'First name cannot be more than {#limit} characters',
    'any.required': 'First name is required',
  }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.base':
        'Last name must only contain alphabetic characters',
      'any.required': 'Last name is required',
    }),
});

// Define Joi schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': 'Father name is required',
    'any.required': 'Father name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Father occupation is required',
    'any.required': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Father contact no. is required',
    'any.required': 'Father contact no. is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': 'Mother name is required',
    'any.required': 'Mother name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Mother occupation is required',
    'any.required': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Mother contact no. is required',
    'any.required': 'Mother contact no. is required',
  }),
});

// Define Joi schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian name is required',
    'any.required': 'Local guardian name is required',
  }),
  Occupation: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian occupation is required',
    'any.required': 'Local guardian occupation is required',
  }),
  ContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian contact no. is required',
    'any.required': 'Local guardian contact no. is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian address is required',
    'any.required': 'Local guardian address is required',
  }),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
    'any.required': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'string.empty': 'Gender is required',
    'any.only': 'Gender must be one of: male, female, other',
    'any.required': 'Gender is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email address is required',
    'string.email': 'Email address must be valid',
    'any.required': 'Email address is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
    'any.required': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
    'any.required': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
    'any.required': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
    'any.required': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian details are required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian details are required',
  }),
  profileImg: Joi.string().allow('').optional(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .required()
    .default('active')
    .messages({
      'string.empty': 'Status is required',
      'any.only': 'Status must be one of: active, blocked',
      'any.required': 'Status is required',
    }),
});

export default studentValidationSchema;
