import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";

import { saveTodo } from "../features/todoSlice";
import Alert from "@material-ui/lab/Alert";

const Input = () => {
  const [input, setInput] = useState("");
  const [triggerErr, setTriggerErr] = useState(false);
  const dispatch = useDispatch();
  const addTodo = () => {
    // console.log(`Adding ${input}`);
    if (input.split("").length) {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now()
        })
      );
      setInput("");
    } else {
      setError();
    }
  };

  const useinputHandlr = e => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleKeyPress = e => {

    // if (!input.split("").length) {
    //   setError();
    // }
    if ((e.code === "Enter" || e.charCode === 13) && input.split("").length) {
      addTodo();
    }
  };

  const setError = () => {
    setTriggerErr(true);
    setTimeout(() => {
      setTriggerErr(false);
    }, 3000);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          value={input}
          placeholder="Todo..!"
          onChange={useinputHandlr}
          onKeyPress={handleKeyPress}
        />

        <button onClick={addTodo} type="submit">
          Add!
        </button>
      </div>
      <>
        {triggerErr ? (
          <Alert severity="error">Empty value cannot be listed</Alert>
        ) : null}
      </>
    </>
  );
};

export default Input;
