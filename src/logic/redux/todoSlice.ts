import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../model";
const getData = () => {
  let todos1 = JSON.parse(localStorage.getItem("todos") as string) || [];
  return todos1;
};
interface I_TodoSliceState {
  todos: Todo[];
  todo: string;
}

const initialState: I_TodoSliceState = {
  todos: getData(),
  todo: "",
};

interface I_Props {
  id: number;
  editTodo: string;
}

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state) => {
      if (state.todo) {
        state.todos = [
          ...state.todos,
          { id: Date.now(), todo: state.todo, isDone: false },
        ];
        state.todo = "";
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    getTodo: (state, action: PayloadAction<string>) => {
      state.todo = action.payload;
    },
    doneTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },

    handleEdit: (state, action: PayloadAction<I_Props>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.editTodo }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, getTodo, doneTodo, handleEdit } =
  TodoSlice.actions;

export default TodoSlice.reducer;
