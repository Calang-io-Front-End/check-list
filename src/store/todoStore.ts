import { useState } from "react";
import { TodoActions, addTodo, removeTodo } from "actions/todoActions";
import todoReducer from "reducers/todoReducers";

interface Todo {
  id: number;
  text: string;
}

type TodoState = Todo[];

function useFluxStore(
  reducer: (state: TodoState, action: TodoActions) => TodoState,
  initialState: TodoState
) {
  const [state, setState] = useState<TodoState>(initialState);

  function dispatch(action: TodoActions) {
    const newState = reducer(state, action);
    setState(newState);
  }

  return [state, dispatch] as const;
}

export default function useTodoStore() {
  const [state, dispatch] = useFluxStore(todoReducer, []);

  const addNewTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const deleteTodo = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  return {
    todos: state,
    addNewTodo,
    deleteTodo
  };
}
