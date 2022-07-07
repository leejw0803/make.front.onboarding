import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todos from "../../todos/Todos";
import {
  removeStorageItem,
  setStorageItem,
} from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";

const Container = styled.div`
  width: 425px;
  height: 796px;
  background: #eeeeee;
  border: 1px solid limegreen;
`;

export type TodoProps = {
  index: number;
  content: string;
};

export type TodoItemProps = {
  todos: TodoProps[];
  index: TodoProps[];
};

export type SetTodosProps = {
  setTodos: () => void;
};

function TodoList() {
  let [todos, setTodos] = useState<TodoProps[]>();
  let [text, setText] = useState<string>("");

  // useEffect(() => {
  // const getData = getStorageItem("content");
  // setTodos(getData);
  // console.log(todos);
  // }, todos);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // const addTodo = (e: React.MouseEvent<HTMLElement>) => {
  //   if (!todos) return;
  //   let newTodos = [...todos, { id: text., content: text }];
  //   setTodos(newTodos);

  //   setStorageItem("content", newTodos);
  // };
  const addTodo = () => {
    console.log(todos);
    if (todos === undefined) setTodos([{ index: 0, content: text }]);
    else {
      console.log(todos.length);

      setTodos([...todos, { index: todos.length, content: text }]);
    }

    // setTodos([...todos, { index: todos.length, content: text }]);

    setStorageItem("content", { index: todos.length, content: text });
  };

  return (
    <Container className="todo-list">
      <h2>
        TodoList (<span></span>)
      </h2>
      <input
        type="text"
        onChange={onChange}
        name="content"
        value={text}
        placeholder="오늘의 할 일은?"
      />
      <button onClick={addTodo}>+</button>

      <Todos todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default TodoList;
