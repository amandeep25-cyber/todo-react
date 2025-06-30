import "./TodoInput.css";
import { useState } from "react";

const TodoInput = ({ createTask }) => {
  let [taskVal, setTaskVal] = useState("");
  let [dateVal, setdateVal] = useState("");

  const takeInputTask = (event) => {
    setTaskVal(event.target.value);
  };

  const takeInputDate = (e) => {
    setdateVal(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          className="input-tag"
          onChange={takeInputTask}
          value={taskVal}
        />
        <input
          type="date"
          className="input-tag"
          onChange={takeInputDate}
          value={dateVal}
        />
        <button
          className="add-btn"
          onClick={() => createTask(taskVal, dateVal)}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInput;
