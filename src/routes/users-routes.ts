import { Router } from 'express';
import {
  getUsers, getUser, createUser, updateUser, deleteUser
} from '../controllers/users-controllers';

export class UsersApi {
  public router: Router;

  constructor() {
    this.router = Router();
    this.router.get('/users', getUsers);
    this.router.get('/users/:id', getUser);
    this.router.post('/users', createUser);
    this.router.patch('/users/:id', updateUser);
    this.router.delete('/users/:id', deleteUser);
  }
}
