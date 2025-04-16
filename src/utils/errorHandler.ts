import { Request, Response, NextFunction } from 'express';
import ErrorLog, { ErrorLogCreationAttributes } from '../models/errorLogModel';

// Standard Express error-handling middleware
export async function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Set default status code and message
  if (err) {
    const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Prepare error log data
  const errorData: ErrorLogCreationAttributes = {
    message,
    stack: err.stack,
    statusCode,
    date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    timestamp: new Date(),
  };

  // Save error log to DB
  try {
    // Use the ErrorLog.build() method to create an instance, then save
    const log = ErrorLog.build(errorData);
    await log.save();
  } catch (dbErr) {
    console.error('Failed to save error log to DB:', dbErr);
  }

  // Optionally log the error here
  console.error(err);

  res.status(statusCode).json({
    success: false,
    error: message,
    // Optionally include stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
  } else {
    next(err);
  } 
}
