import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import TodoName from "./components/TodoName"
import TodoInput from "./components/TodoInput"
function App() {
  

  return (
    <>
      <div className="container">
          <TodoName />
          <TodoInput />
      </div>
    </>
  )
}

export default App
