/* eslint-disable prettier/prettier */
import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/academic-semesters',
  AcademicSemesterControllers.getAcademicSemesters,
);
router.get(
  '/academic-semesters/:id',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

export const AcademicSemesterRoutes = router;
