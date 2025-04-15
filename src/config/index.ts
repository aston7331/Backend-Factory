import { connectMongoDB } from './mongo';
import { connectMySQL } from './mysql';
// import { connectPostgres } from './postgres';

export const connectAllDatabases = async () => {
  await Promise.all([
    connectMongoDB(),
    connectMySQL(),
    // connectPostgres()
  ]);
};
