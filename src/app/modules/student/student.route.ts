import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/students', StudentControllers.getAllStudents);

export const StudentRoute = router;
