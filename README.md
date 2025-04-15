# In .env (for main backend)
PORT=4000# Backend Factory

A modular, scalable Node.js + TypeScript backend boilerplate supporting multiple databases (MongoDB, MySQL, PostgreSQL) with Express.js and environment-based configuration.

## Features
- Express.js server with TypeScript
- Modular structure: controllers, routes, services, models, config
- Multi-database support: MongoDB (via mongoose), MySQL (via mysql2), PostgreSQL (via pg)
- Environment variable management with dotenv
- Middleware: CORS, morgan (logging), body-parser
- Nodemon and ts-node for development
- Clean .gitignore for security and best practices

## Project Structure
```
src/
  config/        # Database connections (mongo.ts, mysql.ts, postgres.ts, index.ts)
  controllers/   # Controller logic
  models/        # Data models
  routes/        # Express routes
  services/      # Business logic
  index.ts       # App entry point
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure environment variables:**
   Edit `.env` with your database credentials and server port.
3. **Run in development mode:**
   ```bash
   npm run start:dev
   ```
4. **Build and run production:**
   ```bash
   npm run build
   npm start
   ```

## Example .env
```env
PORT=3000
# MongoDB
MONGO_URI=mongodb://localhost:27017/backend_factory
# MySQL
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=backend_factory
# PostgreSQL (optional)
# PG_URI=postgresql://user:password@localhost:5432/backend_factory
```

## Notes
- The `dist/`, `node_modules/`, `.env`, and `package-lock.json` files are gitignored for security and cleanliness.
- PostgreSQL support is present but commented out by default. Uncomment in `src/config/index.ts` and `src/config/postgres.ts` to enable.
- Extend modular structure for more features as needed.

---

Created with ❤️ for scalable backend development.
