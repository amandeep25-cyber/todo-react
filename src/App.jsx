import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoName from "./components/TodoName";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  let [ListItems, setListItems] = useState([]);

  const createTask = (taskVal, dateVal) => {
    if (taskVal && dateVal) {
      const newList = {
        task: taskVal,
        date: dateVal,
      };
      const newListItems = [...ListItems, newList];
      setListItems(newListItems);
    }
  };

  const deleteTask = (taskValue, dateValue) => {
    const newTaskLists = ListItems.filter(
      (list) => list.task !== taskValue || list.date !== dateValue
    );
    console.log(taskValue, dateValue);
    setListItems(newTaskLists);
  };

  return (
    <>
      <div className="container">
        <TodoName />
        <TodoInput createTask={createTask} />
      </div>

      <div className="container">
        <TodoList listItems={ListItems} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
