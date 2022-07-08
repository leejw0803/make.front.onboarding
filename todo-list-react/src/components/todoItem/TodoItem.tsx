import { dir } from "console";
import React, { useState, useEffect, useRef } from "react";
import { removeStorageItem } from "../../utils/windowLocalStorage";
import { TodoProps } from "../container/TodoList.type";

function TodoItem({ id, todos, todo, setTodos }) {
  const [edit, setEditTodo] = useState(false);
  const [newText, setNewText] = useState<string>(
    todos?.content ? todos.content : ""
  );

  // ----- 수정
  const editInputRef = useRef(null);

  useEffect(() => {
    if (edit) {
      editInputRef.current.focus();
    }
  }, [edit]);

  const handleEditTodo = () => {
    setEditTodo(true);
  };

  const handleSubmitButton = () => {
    console.log(todo.index);
    console.log(id);

    const newTodos = todos.map((todo) => ({
      ...todo,
      content: todo.index === id ? newText : todo.content,
    }));

    setTodos(newTodos);
    setEditTodo(false);
  };

  // ----- 삭제
  const handleRemoveTodo = (id) => {
    const result = todos.filter((todo) => {
      return todo.index !== id;
    });

    setTodos(result);
    // removeStorageItem("todo");
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setNewText(e.target.value);
  };

  return (
    <div>
      {edit ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleNewInputChange}
            ref={editInputRef}
          />
          <button onClick={handleSubmitButton}>완료</button>
        </>
      ) : (
        <div>
          <span>{todo.content}</span>
          <button onClick={() => handleEditTodo()}>수정</button>
          <button onClick={() => handleRemoveTodo(todo.index)}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
