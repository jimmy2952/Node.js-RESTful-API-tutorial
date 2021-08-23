"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
// import express from 'express';
const express_1 = __importDefault(require("express"));
const database_1 = require("./utils/database");
const users_routes_1 = require("./routes/users-routes");
const app = express_1.default();
const port = 3000;
exports.database = new database_1.Database();
const usersApi = new users_routes_1.UsersApi();
exports.database.connect({
    host: 'localhost',
    port: 5432,
    database: 'restful-tutorial',
    user: 'jimmy2952',
    password: ''
});
app.use(express_1.default.json());
app.use('/api', usersApi.router);
app.use((error, req, res, next) => {
    if (res.headersSent) {
        next(error);
    }
    console.log(error);
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});
app.get('/', (req, res) => {
    res.send('The server is working!');
});
app.listen(port, () => {
    console.log(`server is listening on ${port} !!!`);
});
//# sourceMappingURL=index.js.map