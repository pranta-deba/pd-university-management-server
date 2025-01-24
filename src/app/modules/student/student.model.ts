import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

// Define the schema for UserName
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

// Define the schema for Guardian
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact no. is required'],
  },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact no. is required'],
  },
});

// Define the schema for LocalGuardian
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  Occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  ContactNo: {
    type: String,
    required: [true, 'Local guardian contact no. is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

// Define the main student schema
const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        '{VALUE} is not valid. Gender is required and must be one of: male, female, other',
    },
    required: true,
  },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    required: true,
    default: 'active',
  },
});

// Export the model
export const StudentModel = model<Student>('Student', studentSchema);
