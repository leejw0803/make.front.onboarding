import React, { useState, useEffect, useRef } from "react";
import { removeStorageItem } from "../../utils/windowLocalStorage";
import { TodoProps } from "../container/TodoList.type";

function TodoItem({ id, todos, todo, setTodos }) {
  const [edit, setEditTodo] = useState(false);
  const [newText, setNewText] = useState<string>(
    todos?.content ? todos.content : ""
  );

  const editInputRef = useRef(null);

  useEffect(() => {
    if (edit) {
      // editInputRef.current.focus();
    }
  }, [edit]);

  const handleRemoveTodo = (index) => {
    const result = todos.filter((todo) => {
      return todo.index !== id;
    });

    setTodos(result);
    removeStorageItem("todo");
  };

  const handleEditTodo = () => {
    setEditTodo(true);
  };

  const handlNewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleSubmitButton = (id) => {
    const newTodos = todos.map((todo) => ({
      ...todos,
      content: todo.index === id ? todo.content : newText,
    }));

    setTodos(newTodos);
    setEditTodo(false);
  };
  return (
    <div>
      {edit ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handlNewInputChange}
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
