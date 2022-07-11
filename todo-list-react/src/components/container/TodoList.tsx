import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Todos from "../todos/Todos";
import {
  removeStorageItem,
  setStorageItem,
} from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";
import type { TodoProps } from "./TodoList.type";

const Container = styled.div`
  width: 425px;
  height: 796px;
  background: #eeeeee;
  border: 1px solid limegreen;
`;

function TodoList() {
  let [holder, setHolder] = useState<TodoProps[]>();
  let [holderVisible, setHolderVisible] = useState(false);
  let [todos, setTodos] = useState<TodoProps[]>();
  let [text, setText] = useState<string>("");

  // 처음 렌더링시
  useEffect(() => {
    const initialValue = [{ index: 0, content: "할 일을 등록하세요" }];
    // setHolderVisible(true);
    // setHolder(initialValue);
    // console.log(holder);
    // setStorageItem("");
  }, holder);

  useEffect(() => {
    const localTodoList = getStorageItem("content");
    console.log(localTodoList);
    return setTodos(localTodoList);
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
    if (text.length <= 0) return;
    else {
      setTodos([{ index: 0, content: text }]);
      setTodos([...todos, { index: todos.length, content: text }]);
      setStorageItem("content", todos);
    }
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

      <Todos todos={todos} setTodos={setTodos} holder={holder} />
    </Container>
  );
}

export default TodoList;
