const todoSchema = require('../models/todoModel');

// ADD TASK SERVICE
const addService = async (task) => {
  const addTask = new todoSchema({
    task: task,
  });
  const saveTask = await todoSchema.create(addTask);
  return saveTask;
};

// GET ALL TASK SERVICE
const getService = async () => {
  const list = await todoSchema.find();
  console.log('Getting List from DB ->', list.length);
  return list;
};

// UPDATE TASK SERVICE
const updateService = async (id) => {
  const updateTask = await todoSchema.findByIdAndUpdate(id, {
    completed: true,
    completedTime: Date.now(),
  });
  console.log(updateTask);
  return updateTask;
};

// DELETE TASK SERVICE
const deleteService = async (id) => {
  const deleteTask = await todoSchema.findByIdAndDelete(id);
  console.log(deleteTask);
  return deleteTask;
};

module.exports = { addService, getService, updateService, deleteService };
