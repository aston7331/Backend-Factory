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
- Payment system integration for handling payment-related operations (see below)

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
MONGO_URI=mongodb://localhost:27017/
# MySQL
MYSQL_HOST=localhost
MYSQL_PORT=3307
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=my_db
# PostgreSQL (optional)
# PG_URI=postgresql://user:password@localhost:5432/
```

## Payment System
This backend includes a modular payment system. The payment service is designed to handle all payment-related business logic, making it easy to extend or integrate with various payment gateways (such as Stripe, PayPal, etc.) in the future.

### Payment Features
- Centralized `paymentService.ts` for payment logic
- RESTful endpoints for creating, retrieving, updating, and deleting payments
- Easily extendable for multiple payment providers
- Follows the modular structure: controllers, services, and routes

### Example Usage
The payment endpoints are available via the `/payments` route. Example requests:

**Get all payments:**
```http
GET /payments
```

**Create a payment:**
```http
POST /payments
Content-Type: application/json
{
  "amount": 1000,
  "currency": "USD",
  "method": "credit_card"
}
```

You can customize and extend the payment logic in `src/services/paymentService.ts` and related controller/routes as needed.

## Notes
- The `dist/`, `node_modules/`, `.env`, and `package-lock.json` files are gitignored for security and cleanliness.
- PostgreSQL support is present but commented out by default. Uncomment in `src/config/index.ts` and `src/config/postgres.ts` to enable.
- Extend modular structure for more features as needed.

---

Created with ❤️ for scalable backend development.
