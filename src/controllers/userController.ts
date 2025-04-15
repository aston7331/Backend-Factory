import { Request, Response } from 'express';
import { userService } from '../services/userService';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const user = await userService.getUserById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  }

  async createUser(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  }

  async updateUser(req: Request, res: Response) {
    const user = await userService.updateUser(req.params.id, req.body);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  }

  async deleteUser(req: Request, res: Response) {
    const success = await userService.deleteUser(req.params.id);
    if (success) res.json({ message: 'User deleted' });
    else res.status(404).json({ message: 'User not found' });
  }
}

const userController = new UserController();
export default userController;
