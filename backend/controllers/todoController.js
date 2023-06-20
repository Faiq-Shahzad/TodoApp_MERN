const { addService, getService, updateService, deleteService } = require("../services/todoServices");

// POST TASK CONTROLLER
const postTask = async (req, res) => {
  try {
    const taskData = req.body.task
    const saveTask = await addService(taskData);
    res.status(200).json(saveTask);
  } catch (err) {
    res.json(err);
  }
};

// GET ALL TASK CONTROLLER
const getTasks = async (req, res) => {
  try {
    const list  = await getService();
    res.json(list);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// UPDATE TASK CONTROLLER
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updateTask = await updateService(id); 
    res.status(200).json("Task Updated Successfully -> " + { updateTask });
  } catch (err) {
    console.log(err);

    res.json(err);
  }
};

// DELETE TASK CONTROLLER
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTask = await deleteService(id);
    console.log(deleteTask);
    res.status(200).json("Task Deleted Successfully -> " + { deleteTask });
  } catch (err) {
    console.log(err);

    res.json(err);
  }
};

module.exports = {postTask, getTasks, updateTask, deleteTask}
