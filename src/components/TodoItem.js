import React from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck, setDelete } from "../features/todoSlice";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { green } from "@material-ui/core/colors";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(setDelete(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>

      <div className="actionIcons">
        {" "}
        {!done ? (
          <DeleteForeverOutlinedIcon color="secondary"  onClick={handleDelete} />
        ) : (
          <DoneAllIcon style={{ color: green[500] }} />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
