import { Request, Response, NextFunction } from 'express';

export function exampleMiddleware(req: Request, res: Response, next: NextFunction) {
  // Example middleware logic
  console.log('Middleware triggered!');
  next();
}
