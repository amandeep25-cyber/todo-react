import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoName from "./components/TodoName";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let [ListItems, setListItems] = useState([]);
  let [taskVal, setTaskVal] = useState("");
  let [dateVal, setdateVal] = useState("");

  const takeInputTask = (event) => {
    setTaskVal(event.target.value);
  };

  const takeInputDate = (e) => {
    setdateVal(e.target.value);
  };

  const createTask = (taskVal, dateVal) => {
    if (taskVal && dateVal) {
      const newList = {
        task: taskVal,
        date: dateVal,
      };
      const newListItems = [...ListItems, newList];
      setListItems(newListItems);
      setTaskVal("")
      setdateVal("")
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
        <TodoInput createTask={createTask} taskVal={taskVal} dateVal={dateVal} takeInputDate={takeInputDate} takeInputTask={takeInputTask} />
      </div>

      <div className="container">
        <ErrorMessage listItems={ListItems} />
        <TodoList listItems={ListItems} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
