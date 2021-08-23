"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const index_1 = require("../index");
const error_handler_1 = require("../utils/error-handler");
async function getUsers(request, response, next) {
    const sql = `
    SELECT * FROM users;
  `;
    const params = [];
    const result = await index_1.database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
        response.status(200);
        response.send(result.rows);
    }
}
exports.getUsers = getUsers;
async function getUser(request, response, next) {
    const { id } = request.params;
    const sql = `
    SELECT * FROM users WHERE id = $1;
  `;
    const params = [id];
    try {
        const result = await index_1.database.query(sql, params);
        if (result !== null && result.rowCount !== 0) {
            response.status(200);
            response.send(result.rows[0]);
        }
        else if (result.rowCount === 0) {
            response.status(404).send({
                errorMessage: 'Cannot find User'
            });
        }
    }
    catch (err) {
        const error = new error_handler_1.ErrorHandler();
        next(error);
    }
}
exports.getUser = getUser;
async function createUser(request, response, next) {
    const sql = `
    INSERT INTO users (username, email)
    VALUES ($1, $2);
  `;
    const { username, email } = request.body;
    const params = [username, email];
    const result = await index_1.database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
        response.sendStatus(201);
    }
}
exports.createUser = createUser;
async function updateUser(request, response, next) {
    const sql = `
    UPDATE users
    SET username = $1, email = $2
    WHERE id = $3;
  `;
    const { id } = request.params;
    const { username, email } = request.body;
    const params = [username, email, id];
    const result = await index_1.database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
        response.sendStatus(204);
    }
}
exports.updateUser = updateUser;
async function deleteUser(request, response, next) {
    const sql = `
    DELETE FROM users WHERE id = $1;
  `;
    const { id } = request.params;
    const params = [id];
    const result = await index_1.database.query(sql, params);
    if (result !== null && result.rowCount !== 0) {
        response.sendStatus(204);
    }
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=users-controllers.js.map