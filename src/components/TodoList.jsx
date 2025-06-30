import "./TodoList.css"

const TodoList = ({ listItems }) => {
  return (
    <>
    {listItems.map(listItem => {
        return (
        <li className="input-container">
        <p className="task">{listItem.task}</p>
        <p className="task">{listItem.date}</p>
        <button className="remove-btn">Delete</button>
      </li>
        
      )
    })}
      
    </>
  );
};

export default TodoList;
