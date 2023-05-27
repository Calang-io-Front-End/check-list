let nextTodoId = 1;

export function addTodo(text: string) {
  return {
    type: "ADD" as const,
    payload: {
      id: nextTodoId++,
      text
    }
  };
}

export function removeTodo(todoId: number) {
  return {
    type: "REMOVE" as const,
    payload: {
      id: todoId
    }
  };
}

export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>;
