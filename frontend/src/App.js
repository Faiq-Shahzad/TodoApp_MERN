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

  const handleAddTask = () => {
    addTask(task, setTask, setTodoList);
  };

  const handleUpdateTask = (taskID, completed) => {
    updateTask(taskID, completed, setTodoList);
  };

  const handleDeleteTask = (taskID) => {
    deleteTask(taskID, setTodoList);
  };

  useEffect(() => {
    getTodoList(setTodoList);
  }, []);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="content">
        <img className="profileImg" src={require("./assets/avatar.jpg")} />
        <div className="inputDiv">
          <RxHamburgerMenu className="icon" size={30} />
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
        {todoList.length > 0 ? (
          <div className="list">
            {todoList.map((item) => (
              // <TodoList key={item._id} task={item.task} />
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
