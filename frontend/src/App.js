import "./App.css";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import {
  addTask,
  getTodoList,
  updateTask,
  deleteTask,
} from "./utils/HandleApi";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState();

  // Add a new Task
  const handleAddTask = () => {
    addTask(task, setTask, setTodoList);
  };

  // Update a task
  const handleUpdateTask = (taskID, completed) => {
    updateTask(taskID, completed, setTodoList);
  };

  // Delete a task
  const handleDeleteTask = (taskID) => {
    deleteTask(taskID, setTodoList);
  };

  useEffect(() => {
    // Get TodoList
    getTodoList(setTodoList);
  }, []);

  return (
    <div className="App">
      {/* Background Image */}
      <div className="background"></div>
      <div className="content">
        {/* Profile Image */}
        <img className="profileImg" src={require("./assets/avatar.jpg")} />

        {/* Input Task Field */}
        <div className="inputDiv">
          <RxHamburgerMenu className="icon" size={30} />

          {/* Form Used to Add a Task on Enter */}
          <form className="inputForm" onSubmit={handleAddTask}>
            <input
              className="inputField"
              placeholder="To do today"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <RxChevronDown
              className="icon"
              size={18}
              type="submit"
              onClick={handleAddTask}
            />
          </form>
        </div>

        {/* Display List */}
        {todoList.length > 0 ? (
          <div className="list">
            {todoList.map((item) => (
              <TodoList
                todo={item}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
