// PRESENTER(Markup / stateless)
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import TodoItem from "../todo-item/TodoItem";
import {
  TodosProps,
  TodoProps,
  TodosListPresenterTypes,
} from "./TodoList.type";

// type TodosProps = {
//   todos: TodoProps[];
//   // index: TodoProps[];
//   setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
// };

const TodoListItemStyle = styled.div`
  margin: 0 auto;
  width: 388px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #edf0f3;
`;

function TodosListPresenter({
  todos,
  setTodos,
  handleAddTodo,
  text,
  setText,
  handleInputChange,
}: TodosProps & TodosListPresenterTypes): // { }: TodosListPresenterTypes
JSX.Element {
  return (
    <TodoListItemStyle>
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
      {todos?.map((todo, i) => {
        const id: number = i;
        return (
          <TodoItem
            key={i}
            id={id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          ></TodoItem>
        );
      })}
    </TodoListItemStyle>
  );
}

export default TodosListPresenter;
