import { Database } from './utils/database';

export const database = new Database({
  host: 'localhost',
  port: 5432,
  database: 'restful-tutorial',
  user: 'jimmy2952',
  password: ''
});

(async () => {
  const sql = `
    SELECT * FROM users;
  `;
  const result = await database.query(sql, []);
  console.log(result.rows);
})();
