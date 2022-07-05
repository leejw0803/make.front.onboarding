import React, { useState } from "react";

const Todos = ({ todos }) => {
  console.log(todos);
  // console.dir(todos);
  return (
    <div>
      {todos.map((todos, i) => {
        return (
          <div key={i}>
            <div>{todos.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
