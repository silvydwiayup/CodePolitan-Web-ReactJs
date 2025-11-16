import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store";

function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type todo here"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "0.5rem" }}>
        Add
      </button>
    </div>
  );
}

export default Form;
