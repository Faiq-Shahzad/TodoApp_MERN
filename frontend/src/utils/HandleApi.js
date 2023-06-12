import axios from "axios";

const backendUrl = "http://localhost:3000";

// HandleApi file is being used to connect to the server using axios to perform GET, POST, UPDATE, DELETE Functions in a seperate file to keep the code clean

// Get TodoList
const getTodoList = (setTodoList) => {
  axios
    .get(backendUrl)
    .then(({ data }) => {
      console.log("data is -> ", data);
      setTodoList(data);
    })
    .catch((err) => console.log(err));
};

// Add a new task
const addTask = (task, setTask, setTodoList) => {
  axios
    .post(`${backendUrl}/addtask`, { task })
    .then((data) => {
      console.log(data);
      setTask("");
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};

// Update a task
const updateTask = (taskID, taskCompleted, setTodoList) => {
  axios
    .put(`${backendUrl}/task/${taskID}`, {
      _id: taskID,
      completed: taskCompleted,
      completedTime: Date.now,
    })
    .then((data) => {
      console.log(data);
      // setTask("");
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};

// Delete a task
const deleteTask = (taskID, setTodoList) => {
  axios
    .delete(`${backendUrl}/task/${taskID}`)
    .then((data) => {
      console.log(data);
      // setTask("");
      getTodoList(setTodoList);
    })
    .catch((err) => console.log(err));
};

export { getTodoList, addTask, updateTask, deleteTask };
