import { TodoActions } from "actions/todoActions";

interface Todo {
  id: number;
  text: string;
}

type TodoState = Todo[];
const initialState: TodoState = [];

export default function todoReducer(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
