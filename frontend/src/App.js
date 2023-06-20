import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import {
  addTask,
  getTodoList,
  updateTask,
  deleteTask,
} from "./utils/HandleApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";

function App() {
  const [todoList, setTodoList] = useState([]);

  // Add a new Task
  const handleAddTask = (task, setTask, e) => {
    e.preventDefault();
    if (task == ""){
      toast("Please provide a valid task");  
    }else{
      addTask(task, setTask, setTodoList);
      toast("'" + task + "' Task Added Successfully");  
    }
  };

  // Update a task
  const handleUpdateTask = (taskID, completed) => {
    updateTask(taskID, completed, setTodoList);
    toast("Task Completed");
  };

  // Delete a task
  const handleDeleteTask = (taskID) => {
    deleteTask(taskID, setTodoList);
    toast("Task Deleted Successfully");
  };

  useEffect(() => {
    // Get TodoList
    getTodoList(setTodoList);
  }, []);

  return (
    <div className="App">
      {/* Background Image */}
      <BackgroundImage />

      <div className="content">
        {/* Profile Image */}
        <ProfilePicture />

        {/* Input Task Field */}
        <TodoInput handleAddTask={handleAddTask} />

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
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
