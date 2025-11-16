import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../store";

function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
