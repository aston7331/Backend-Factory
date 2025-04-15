import { connectMongoDB } from './mongo';
import { syncMySQLDb } from './mysql';
// import { connectPostgres } from './postgres';

export const connectAllDatabases = async () => {
  await Promise.all([
    connectMongoDB(),
    syncMySQLDb(),
    // connectPostgres()
  ]);
};