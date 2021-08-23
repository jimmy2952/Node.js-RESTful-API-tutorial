"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
async function up(pgm) {
    pgm.sql(`
    INSERT INTO users (username, email)
    VALUES
      ('Jimmy', 'test@test.com'),
      ('Hello', 'hello@test.com'),
      ('World', 'world@test.com');
  `);
}
exports.up = up;
async function down(pgm) {
    pgm.sql(`
    DELETE FROM users WHERE username = 'Jimmy';
    DELETE FROM users WHERE username = 'Hello';
    DELETE FROM users WHERE username = 'World';
  `);
}
exports.down = down;
//# sourceMappingURL=20210818150950018_init-user-data.js.map