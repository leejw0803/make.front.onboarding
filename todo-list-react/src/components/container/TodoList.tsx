import React, { useState } from "react";
import styled from "styled-components";
import Todos from "../../todos/Todos";

const Container = styled.div`
  width: 300px;
  height: 600px;
  border: 1px solid limegreen;
`;

export type TodoProps = {
  content: string;
};

let todo: TodoProps;

function TodoList() {
  let [todos, setTodos] = useState([
    { content: "온보딩 과제하기" },
    { content: "끝내주는 저녁 먹기" },
  ] as any);
  console.log(todos);

  let [text, setText] = useState<string>("");

  const onChange = (e: any) => {
    setText((e.target as HTMLInputElement).value);
    // console.log(e.target.value);
  };

  const addTodo = (e) => {
    let newTodos = [...todos, { content: text }];
    setTodos(newTodos);
  };

  return (
    <Container className="todo-list">
      <h2>TodoList</h2>
      <input
        type="text"
        onChange={onChange}
        name="content"
        value={text}
        placeholder="오늘의 할 일은?"
      />
      <button onClick={addTodo}>ADD</button>
      <Todos todos={todos} />
    </Container>
  );
}

export default TodoList;
