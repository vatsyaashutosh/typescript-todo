import React, { useEffect } from "react";
import InputField from "../components/InputField/InputField";
import TodoList from "../components/TodoList/TodoList";
import { AppContianer, AppHeading } from "./style";
import "./App.css";
import { useSelector } from "react-redux";
import { selectTodos } from "../../../logic/redux/store";

const App: React.FC = () => {
  const todos = useSelector(selectTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <AppContianer>
      <AppHeading>To-do App</AppHeading>
      <InputField />
      <TodoList />
    </AppContianer>
  );
};

export default App;
