import { Pool, pool } from 'pg';
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '1020',
    database: 'fac'

})