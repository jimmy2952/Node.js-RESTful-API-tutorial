import { Pool, PoolConfig } from 'pg';

export class Database {
  pool: Pool;

  constructor(options: PoolConfig) {
    this.pool = new Pool(options);
  }

  query(sql: string, params: any) {
    return this.pool.query(sql, params);
  }
}
