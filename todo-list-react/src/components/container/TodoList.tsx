import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todos from "../../todos/Todos";
import { setStorageItem } from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";

const Container = styled.div`
  width: 425px;
  height: 796px;
  background: #eeeeee;
  border: 1px solid limegreen;
`;

export type TodoProps = {
  id: number;
  content: string;
};

export type SetTodosProps = {
  setTodos: () => void;
};

function TodoList() {
  let [todos, setTodos] = useState([] as any);
  let [text, setText] = useState<string>("");

  // useEffect(() => {
  // const getData = getStorageItem("content");
  // setTodos(getData);
  // console.log(todos);
  // }, todos);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = (e: React.MouseEvent<HTMLElement>) => {
    let newTodos = [...todos, { id: todos.length, content: text }];
    setTodos(newTodos);
    // }
    console.dir(newTodos);

    setStorageItem("content", newTodos);
  };

  const removeTodo = (id: any) => {
    const result = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(result);
  };

  return (
    <Container className="todo-list">
      <h2>
        TodoList (<span>{todos.length}</span>)
      </h2>
      <input
        type="text"
        onChange={onChange}
        name="content"
        value={text}
        placeholder="오늘의 할 일은?"
      />
      <button onClick={addTodo}>+</button>
      <Todos todos={todos} removeTodo={removeTodo} />
    </Container>
  );
}

export default TodoList;
