import "./TodoInput.css"

const TodoInput = () => {
  return (
    <>
      <div className="input-container">
            <input type="text" placeholder="Enter your task" className="input-tag"/>
            <input type="date" className="input-tag"/>
            <button className="add-btn">Add</button>
      </div>
    </>
  );
};

export default TodoInput;
