import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
const todoItems = [
  {
    name: "Buy Milk",
    dueDate:"4/10/2024",
  },
  {
    name: "Buy Milk",
    dueDate:"4/10/2024",
  },
  {
    name: "Like This Video",
    dueDate:"Right Now",
  },
];

  return (
  <center className="todo-container">
   <AppName />
   <AddTodo />
   <TodoItems todoItems={todoItems}></TodoItems>
   
   </center>
   );
}

export default App
