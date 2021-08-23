"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
async function up(pgm) {
    pgm.sql(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR,
      email VARCHAR
    )
  `);
}
exports.up = up;
async function down(pgm) {
    pgm.sql(`
    DROP TABLE users;
  `);
}
exports.down = down;
//# sourceMappingURL=20210818145904816_user-table.js.map