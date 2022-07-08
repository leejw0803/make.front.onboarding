import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todos from "../../todos/Todos";
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

const initialValue = { id: 0, content: "할 일을 등록하세요" };

function TodoList() {
  // let [holder, setHolder] = useState(initialValue);
  // let [holderVisible, setHolderVisible] = useState(false);
  let [todos, setTodos] = useState<TodoProps[]>();
  let [text, setText] = useState<string>("");

  // 처음 렌더링시
  useEffect(() => {
    // setHolderVisible(true);
    // console.log(holder);
    // setStorageItem("");
  });

  useEffect(() => {
    // setTodos(getStorageItem("content"));
    // console.log(todos);
  }, todos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // const addTodo = (e: React.MouseEvent<HTMLElement>) => {
  //   if (!todos) return; // 의미없어.
  //   let newTodos = [...todos, { id: text., content: text }];
  //   setTodos(newTodos);

  //   setStorageItem("content", newTodos);
  // };

  const handleAddTodo = () => {
    console.log(todos); // null
    if (todos === undefined) setTodos([{ index: 0, content: text }]);
    else {
      setTodos([...todos, { index: todos.length, content: text }]);
    }
    setStorageItem("content", { index: todos.length, content: text });
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

    // <Container className="todo-list">
    //   <h2>
    //     TodoList (<span></span>)
    //   </h2>
    //   <input
    //     type="text"
    //     onChange={handleInputChange}
    //     name="content"
    //     value={text}
    //     placeholder="오늘의 할 일은?"
    //   />
    //   <button onClick={handleAddTodo}>+</button>
    //   {holderVisible ? (
    //     <>
    //       <Todos holder={holder} />
    //     </>
    //   ) : (
    //     <>
    //       <Todos todos={todos} setTodos={setTodos} />
    //     </>
    //   )}
    // </Container>
  );
}

export default TodoList;
