"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_1 = require("pg");
class Database {
    constructor() {
        this.pool = new pg_1.Pool();
    }
    connect(options) {
        this.pool = new pg_1.Pool(options);
    }
    query(sql, params) {
        return this.pool.query(sql, params);
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map