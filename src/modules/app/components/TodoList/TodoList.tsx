import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectTodos } from "../../../../logic/redux/store";
import SingleTodo from "../SingleTodo/SingleTodo";

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    width: 95%;
  }
`;
const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <TodoContainer className="todos">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todos={todos} todo={todo} />
      ))}
    </TodoContainer>
  );
};

export default TodoList;
