import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todos from "../todos/Todos";
import { setStorageItem } from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";
import type { TodoProps } from "./TodoList.type";

const Container = styled.div`
  width: 425px;
  height: 796px;
  background: #eeeeee;
  border: 1px solid limegreen;
`;

function TodoList() {
  let [todos, setTodos] = useState<TodoProps[]>();
  let [text, setText] = useState<string>("");

  // todo 불러오기
  // useEffect에서 async-await 사용하기
  useEffect(() => {
    async function testSetTodos() {
      const localTodoList = await getStorageItem("content");
      return setTodos(localTodoList);
    }
    testSetTodos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // const addTodo = (e: React.MouseEvent<HTMLElement>) => {
  //   if (!todos) return; // 의미없어.
  //   let newTodos = [...todos, { id: text., content: text }];
  //   setTodos(newTodos);

  //   setStorageItem("content", newTodos);
  // };

  // const handleAddTodo = () => {
  //   if (todos === undefined) setTodos([{ index: 0, content: text }]);
  //   else {
  //     setTodos([...todos, { index: todos.length, content: text }]);
  //     setStorageItem("content", { index: todos.length, content: text });
  //   }
  // };

  const handleAddTodo = () => {
    return new Promise(function (resolve) {
      if (text.length <= 0) return;
      else {
        setTodos([{ index: 0, content: text }]);
        setTodos([...todos, { index: todos.length, content: text }]);
        setStorageItem("content", todos);
      }
    });
  };

  return (
    <Container>
      <h2>
        TodoList (<span></span>)
      </h2>
      <input
        type="text"
        onChange={handleInputChange}
        name="content"
        value={text}
        placeholder="오늘의 할 일은?"
      />
      <button onClick={handleAddTodo}>+</button>

      <Todos todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default TodoList;
