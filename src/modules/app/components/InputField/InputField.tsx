import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { TodoButton, TodoForm, TodoInput } from "./style";
import { addTodo, getTodo } from "../../../../logic/redux/todoSlice";
import { useDispatch } from "react-redux";
import { selectTodo } from "../../../../logic/redux/store";

const InputField = () => {
  const inputRef = useRef<HTMLInputElement>();
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
    <TodoForm
      onSubmit={(e) => {
        dispatch(addTodo());
        e.preventDefault();
        inputRef.current?.blur();
      }}
    >
      <TodoInput
        value={todo}
        onChange={(e) => dispatch(getTodo(e.target.value))}
        type="input"
        placeholder="Enter a text"
      />
      <TodoButton type="submit">Go</TodoButton>
    </TodoForm>
  );
};

export default InputField;
