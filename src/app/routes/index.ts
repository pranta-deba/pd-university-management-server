/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/students',
    route: StudentRoute,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
