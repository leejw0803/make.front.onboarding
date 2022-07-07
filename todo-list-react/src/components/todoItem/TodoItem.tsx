import React from "react";
import { removeStorageItem } from "../../utils/windowLocalStorage";

function TodoItem({
  id,
  todos,
  todo,
  setTodos,
  updateInputRef,
  update,
  updateInput,
  newText,
  updateTodo,
  // submitTodo,
  // removeTodo,
}) {
  console.log(id);
  const removeTodo = (id) => {
    console.log(id);

    const result = todos.filter((todo) => {
      return todo.index !== id;
    });

    setTodos(result);
    removeStorageItem("todo");
  };
  return (
    <div>
      {update ? (
        <input
          type="text"
          value={newText}
          onChange={updateInput}
          ref={updateInputRef}
        />
      ) : (
        <div>
          <span>{todo.content}</span>
          <button onClick={() => updateTodo(todo.id)}>수정</button>
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
