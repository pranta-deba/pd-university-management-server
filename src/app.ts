import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoute);
app.use('/api/v1/users', UserRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
