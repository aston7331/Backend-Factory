// PostgreSQL connection temporarily disabled by user request.
// import { Client as PgClient } from 'pg';

// export const connectPostgres = async () => {
//   const PG_URI = process.env.PG_URI || '';
//   if (!PG_URI) {
//     console.warn('PG_URI not set in environment. Skipping PostgreSQL connection.');
//     return;
//   }
//   const client = new PgClient({ connectionString: PG_URI });
//   try {
//     await client.connect();
//     console.log('PostgreSQL connected');
//     return client;
//   } catch (error) {
//     console.error('PostgreSQL connection error:', error);
//     process.exit(1);
//   }
// };
