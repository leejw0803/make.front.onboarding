import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SetTodosProps, TodoProps } from "../components/container/TodoList";
import { removeStorageItem } from "../utils/windowLocalStorage";
import { getStorageItem } from "../utils/windowLocalStorage";

const TodoListItem = styled.div`
  margin: 0 auto;
  width: 388px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #edf0f3;
`;
function Todos({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <TodoListItem key={i}>
          <div>{todo.content}</div>
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </TodoListItem>
      ))}
    </div>
  );
}

export default Todos;
