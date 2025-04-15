import { User, users } from '../models/userModel';

export const getAllUsers = (): User[] => {
  // In a real app, fetch from DB
  return users;
};
