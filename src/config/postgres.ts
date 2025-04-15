// PostgreSQL connection using sequelize-typescript.
import { Sequelize } from 'sequelize-typescript';
// import your Postgres models here, e.g.:
// import SomeModel from '../models/someModel';

export const sequelizePostgres = new Sequelize({
  dialect: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT) || 5432,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  // models: [SomeModel], // Add your Postgres models here
});

export const syncPostgresDb = async () => {
  try {
    await sequelizePostgres.sync();
    console.log('PostgreSQL Database & tables synced!');
  } catch (error) {
    console.error('PostgreSQL DB sync error:', error);
  }
};
