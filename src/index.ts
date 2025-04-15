import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import { connectAllDatabases } from './config';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to all configured databases
connectAllDatabases();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Modular routes
app.use('/api', routes);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Backend Factory API running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
