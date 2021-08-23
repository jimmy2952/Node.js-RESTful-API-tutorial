import { NextFunction, Request, Response } from 'express';
import { database } from '../index';
import { ErrorHandler } from '../utils/error-handler';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  const sql = `
    SELECT * FROM users;
  `;
  const params = [];
  try {
    const result = await database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
      res.status(200);
      res.send(result.rows);
    }
  } catch (err) {
    const error = new ErrorHandler();
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const sql = `
    SELECT * FROM users WHERE id = $1;
  `;
  const params = [id];
  try {
    const result = await database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
      res.status(200);
      res.send(result.rows[0]);
    } else if (result.rowCount === 0) {
      const error = new ErrorHandler('Cannot find user', 404);
      next(error);
    }
  } catch (err) {
    const error = new ErrorHandler();
    next(error);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  const sql = `
    INSERT INTO users (username, email)
    VALUES ($1, $2);
  `;
  const { username, email } = req.body;
  const params = [username, email];
  try {
    const result = await database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
      res.sendStatus(201);
    }
  } catch (err) {
    const error = new ErrorHandler();
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  const sql = `
    UPDATE users
    SET username = $1, email = $2
    WHERE id = $3;
  `;
  const { id } = req.params;
  const { username, email } = req.body;
  const params = [username, email, id];
  const result = await database.query(sql, params);
  try {
    const result = await database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
      res.sendStatus(204);
    }
  } catch (err) {
    const error = new ErrorHandler();
    next(error);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  const sql = `
    DELETE FROM users WHERE id = $1;
  `;
  const { id } = req.params;
  const params = [id];
  const result = await database.query(sql, params);
  try {
    const result = await database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
      res.sendStatus(201);
    }
  } catch (err) {
    const error = new ErrorHandler();
    next(error);
  }
}
