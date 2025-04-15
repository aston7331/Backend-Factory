import mongoose from 'mongoose';
import mysql from 'mysql2/promise';
// import { Client as PgClient } from 'pg'; // Uncomment if you enable PostgreSQL

// Common function to check health of any DB
export async function checkDbHealth({
  type,
  config
}: {
  type: 'mongo' | 'mysql' | 'postgres',
  config?: any
}): Promise<{ healthy: boolean; message: string }> {
  try {
    if (type === 'mongo') {
      if (mongoose.connection.readyState === 1) {
        return { healthy: true, message: 'MongoDB connected' };
      }
      await mongoose.connect(process.env.MONGO_URI || '');
      return { healthy: true, message: 'MongoDB connected' };
    }
    if (type === 'mysql') {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        ...config
      });
      await connection.ping();
      await connection.end();
      return { healthy: true, message: 'MySQL connected' };
    }
    // Uncomment and complete if you enable PostgreSQL
    // if (type === 'postgres') {
    //   const client = new PgClient({ connectionString: process.env.PG_URI });
    //   await client.connect();
    //   await client.end();
    //   return { healthy: true, message: 'PostgreSQL connected' };
    // }
    return { healthy: false, message: 'Unknown database type' };
  } catch (error) {
    return { healthy: false, message: `${type} connection error` };
  }
}

export async function checkAllDbHealth() {
  const [mongo, mysql] = await Promise.all([
    checkDbHealth({ type: 'mongo' }),
    checkDbHealth({ type: 'mysql' }),
    // checkDbHealth({ type: 'postgres' }), // Uncomment if enabled
  ]);
  return { mongo, mysql /*, postgres */ };
}
