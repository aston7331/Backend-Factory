import mysql from 'mysql2/promise';

export const connectMySQL = async () => {
  const MYSQL_HOST = process.env.MYSQL_HOST || '';
  const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
  const MYSQL_USER = process.env.MYSQL_USER || '';
  const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '';
  const MYSQL_DATABASE = process.env.MYSQL_DATABASE || '';
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
    console.warn('MySQL credentials not set in environment. Skipping MySQL connection.');
    return;
  }
  try {
    const connection = await mysql.createConnection({
      host: MYSQL_HOST,
      port: MYSQL_PORT,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
    });
    console.log('MySQL connected');
    return connection;
  } catch (error) {
    console.error('MySQL connection error:', error);
    process.exit(1);
  }
};
