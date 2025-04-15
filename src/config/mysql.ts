import { Sequelize } from 'sequelize-typescript';
import User from '../models/userModel';
import Notification from '../models/notificationModel';
import Payment from '../models/paymentModel';

// MySQL connection using sequelize-typescript
export const sequelizeMySQL = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  models: [User, Notification, Payment],
});

export const syncMySQLDb = async () => {
  try {
    await sequelizeMySQL.sync();
    console.log('MySQL Database & tables synced!');
  } catch (error) {
    console.error('MySQL DB sync error:', error);
  }
};
