import './App.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList({ todos, deleteTodo }) {
  console.log(todos)
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>
          {todo}
          <Button
            variant="danger"
            className="mx-3 my-2"
            onClick={() => deleteTodo(index)}
          >Delete
          </Button>
        </li>
      })}
    </ul>
  )
}
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]); // array=[1,2,3] [...array, 4] > output, 1, 2, 3, 4
    setNewTodo("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5 mx-5 custom-border">
    <div className="m-3">
      <h1 className="text-center fw-bold mb-5 custom-color">Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className="rounded mb-4 mx-3 p-2"
        style={{width: "450px"}}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        Add
      </Button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
    </div>
  );
}

export default App