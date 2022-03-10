export interface Todo {
  idx: number;
  text: string;
  createdAt: string;
  completed: boolean;
}


export type Status = 'total' | 'completed' | 'notyet';