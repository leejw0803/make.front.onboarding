import React from "react";

function TodoItemPresenter({
  newText,
  edit,
  todo,
  editInputRef,
  handleEditTodo,
  handleRemoveTodo,
  handleNewInputChange,
  handleUpdateButton,
}) {
  return (
    <>
      {edit ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleNewInputChange}
            ref={editInputRef}
          />
          <button onClick={handleUpdateButton}>완료</button>
        </>
      ) : (
        <>
          <span>{todo.content}</span>
          <button onClick={() => handleEditTodo()}>수정</button>
          <button onClick={() => handleRemoveTodo(todo.index)}>삭제</button>
        </>
      )}
    </>
  );
}

export default TodoItemPresenter;
