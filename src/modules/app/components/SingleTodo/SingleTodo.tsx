import { useEffect, useRef, useState } from "react";
import { Todo } from "../../../../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import {
  IconContainer,
  IconSpan,
  TodoElementForm,
  TodoInput,
  TodoSpan,
  TodoSpan1,
} from "./style";
import { useDispatch } from "react-redux";
import {
  doneTodo,
  handleEdit,
  removeTodo,
} from "../../../../logic/redux/todoSlice";
interface Props {
  todo: Todo;
  todos: Todo[];
}

const SingleTodo = ({ todo, todos }: Props) => {
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [edit, setEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <TodoElementForm
      onSubmit={(e) => {
        dispatch(handleEdit({ id: todo.id, editTodo }));
        setEdit(false);
        e.preventDefault();
      }}
    >
      {edit ? (
        <TodoInput
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <TodoSpan1> {todo.todo} </TodoSpan1>
      ) : (
        <TodoSpan> {todo.todo} </TodoSpan>
      )}

      <IconContainer>
        <IconSpan
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </IconSpan>
        <IconSpan>
          <AiFillDelete onClick={() => dispatch(removeTodo(todo.id))} />
        </IconSpan>
        <IconSpan onClick={() => dispatch(doneTodo(todo.id))}>
          <MdDone />
        </IconSpan>
      </IconContainer>
    </TodoElementForm>
  );
};

export default SingleTodo;
