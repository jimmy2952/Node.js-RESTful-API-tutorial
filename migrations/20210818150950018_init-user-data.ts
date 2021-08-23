import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    INSERT INTO users (username, email)
    VALUES
      ('Jimmy', 'test@test.com'),
      ('Hello', 'hello@test.com'),
      ('World', 'world@test.com');
  `);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    DELETE FROM users WHERE username = 'Jimmy';
    DELETE FROM users WHERE username = 'Hello';
    DELETE FROM users WHERE username = 'World';
  `);
}
