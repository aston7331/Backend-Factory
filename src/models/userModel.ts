export interface User {
  id: number;
  name: string;
}

// Example static user list (replace with DB logic later)
export const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
