import { configureStore } from "@reduxjs/toolkit";
import Todo from "./todoSlice";
export const store = configureStore({
  reducer: {
    Todo,
  },
});
type RootState = ReturnType<typeof store.getState>;
export const selectTodos = (state: RootState) => state.Todo.todos;
export const selectTodo = (state: RootState) => state.Todo.todo;
