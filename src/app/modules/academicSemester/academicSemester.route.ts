/* eslint-disable prettier/prettier */
import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.get(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
