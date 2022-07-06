import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SetTodosProps, TodoProps } from "../components/container/TodoList";
import { removeStorageItem } from "../utils/windowLocalStorage";
import { getStorageItem } from "../utils/windowLocalStorage";

const TodoCard = styled.div`
  margin: 0 auto;
  width: 388px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #edf0f3;
`;
function Todos({ todos, setTodos }) {
  // const removeTodo = (e: React.MouseEvent<HTMLElement>) => {
  //   const result = todos.filter((todo) => {
  //     e.currentTarget.id !== todo.id;
  //   });
  //   setTodos(result);
  // };

  // const updateTodo = (e: React.MouseEvent<HTMLElement>) => {};

  // const getData = getStorageItem("content");
  // console.log(getData);
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <TodoCard id={i}>
              {todo.content}
              {/* <button id={i} onClick={removeTodo}>
                삭제
              </button> */}
            </TodoCard>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
