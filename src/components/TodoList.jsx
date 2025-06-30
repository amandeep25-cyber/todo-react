import "./TodoList.css";

const TodoList = ({ listItems, deleteTask }) => {
  return (
    <>
      {listItems.map((listItem, idx) => {
        return (
          <li className="input-container" key={idx}>
            <p className="task">{listItem.task}</p>
            <p className="task">{listItem.date}</p>
            <button
              className="remove-btn"
              onClick={() => deleteTask(listItem.task, listItem.date)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
