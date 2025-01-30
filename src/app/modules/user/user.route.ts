import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('i am senabahini');
};

router.post('/create-student', UserControllers.createStudent);

export const UserRoute = router;
