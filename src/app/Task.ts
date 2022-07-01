export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}


export const emptyTask: Task = {
  id: 0,
  text: "",
  day: "",
  reminder: false
}