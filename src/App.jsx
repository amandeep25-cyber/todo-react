import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoName from "./components/TodoName";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  let [ListItems, setListItems] = useState([
    {
      task: "hii i am here",
      date: "10/12/2025",
    },
    {
      task: "hdsf",
      date: "10/12/2025",
    },
  ]);

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

  return (
    <>
      <div className="container">
        <TodoName />
        <TodoInput createTask={createTask} />
      </div>

      <div className="container">
        <TodoList listItems={ListItems} />
      </div>
    </>
  );
}

export default App;
