import "./TodoInput.css";

const TodoInput = ({
  createTask,
  taskVal,
  takeInputTask,
  takeInputDate,
  dateVal,
}) => {
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
