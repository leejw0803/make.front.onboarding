import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import TodoItem from "../todoItem/TodoItem";
import { TodoProps } from "../container/TodoList.type";

type TodosProps = {
  todos: TodoProps[];
  // index: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
};

const TodoListItems = styled.div`
  margin: 0 auto;
  width: 388px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #edf0f3;
`;

function Todos({ todos, setTodos }: TodosProps) {
  // [] if(todos) -> true
  return (
    <TodoListItems>
      {todos &&
        todos.map((todo, i) => {
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

      {/* {update ? (
            <button onClick={submitTodo}>완료</button>
          ) : (
            <button onClick={() => updateTodo(todo.id)}>수정</button>
          )}
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </TodoListItem>
      )} */}
    </TodoListItems>
  );
}

export default Todos;
