import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SetTodosProps, TodoProps } from "../components/container/TodoList";
import { removeStorageItem } from "../utils/windowLocalStorage";
import { getStorageItem } from "../utils/windowLocalStorage";
import TodoItem from "../components/todoItem/TodoItem";

const TodoListItems = styled.div`
  margin: 0 auto;
  width: 388px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #edf0f3;
`;

function Todos({ todos, setTodos }) {
  const [update, setUpdate] = useState(false);
  const [newText, setNewText] = useState<string>(
    todos?.content ? todos.content : ""
  );

  const updateInputRef = useRef(null);

  useEffect(() => {
    console.log(update);

    if (update) {
      // updateInputRef.current.focus();
    }
  }, [update]);

  const updateTodo = (id: void) => {
    console.log(id);

    if (todos.id === id) {
      setUpdate(true);
    } else {
      return;
    }
  };

  const submitTodo = () => {
    // setTodos(newText);
  };

  const updateInput = (e) => {
    setNewText(e.target.value);
  };

  return (
    <TodoListItems>
      {todos &&
        todos.map((todo, i) => {
          const id: number = i;
          console.log(i);

          return (
            <TodoItem
              key={i}
              id={id}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              updateInputRef={updateInputRef}
              update={update}
              updateInput={updateInput}
              newText={newText}
              updateTodo={updateTodo}
              // submitTodo={submitTodo}
              // removeTodo={removeTodo(i)}
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
