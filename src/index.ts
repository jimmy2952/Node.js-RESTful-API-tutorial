// import express from 'express';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { Database } from './utils/database';
import { UsersApi } from './routes/users-routes';
import { ErrorHandler } from './utils/error-handler';

const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

export const database = new Database({
  host: 'localhost',
  port: 5432,
  database: 'restful-tutorial',
  user: 'jimmy2952',
  password: ''
});

const usersApi = new UsersApi();

app.use(express.json());
app.use('/api', usersApi.router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    next(error);
  }
  res.status(error.code || 500);
  res.json({
    code: error.code || 500,
    message: error.message || 'An unknown error occurred!',
    stack: error.stack || {}
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('The server is working!');
});

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});
