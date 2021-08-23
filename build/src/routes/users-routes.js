"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersApi = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users-controllers");
class UsersApi {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/users', users_controllers_1.getUsers);
        this.router.get('/users/:id', users_controllers_1.getUser);
        this.router.post('/users', users_controllers_1.createUser);
        this.router.patch('/users/:id', users_controllers_1.updateUser);
        this.router.delete('/users/:id', users_controllers_1.deleteUser);
    }
}
exports.UsersApi = UsersApi;
//# sourceMappingURL=users-routes.js.map