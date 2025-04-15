// Dummy service logic; replace with real DB logic as needed
import { v4 as uuidv4 } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
};

const users: User[] = [];

 class UserService {
  async getAllUsers(): Promise<User[]> {
    return users;
  }

  async getUserById(id: string): Promise<User | undefined> {
    return users.find(u => u.id === id);
  }

  async createUser(data: Omit<User, 'id'>): Promise<User> {
    const user = { id: uuidv4(), ...data };
    users.push(user);
    return user;
  }

  async updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User | undefined> {
    const user = users.find(u => u.id === id);
    if (user) {
      Object.assign(user, data);
      return user;
    }
    return undefined;
  }

  async deleteUser(id: string): Promise<boolean> {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const userService = new UserService();
