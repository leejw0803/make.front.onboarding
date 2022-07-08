export type TodoProps = {
  index: number;
  content: string;
};

export type TodoItemProps = {
  todos: TodoProps[];
  // index: TodoProps[];
};

export type SetTodosProps = {
  setTodos: () => void;
};