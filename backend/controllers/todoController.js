const todoSchema = require("../models/todoModel");
const { Router } = require("express");

const router = Router();

//route to add a new task
router.post("/addtask", async (req, res) => {
  try {
    const addTask = new todoSchema({
      task: req.body.task,
    });

    const saveTask = await todoSchema.create(addTask);
    res.status(200).json(saveTask);
  } catch (err) {
    res.json(err);
  }
});

//route to get all the tasks
router.get("/", async (req, res) => {
  try {
    const list = await todoSchema.find();
    console.log("Getting List from DB ->", list.length);
    res.json(list);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.put("/task/:id", async (req, res) => {
  try {
    const updateTask = await todoSchema.findByIdAndUpdate(req.params.id, {
      completed: true,
      completedTime: Date.now(),
    });
    console.log(updateTask);
    res.status(200).json("Task Updated Successfully -> "+ {updateTask});
  } catch (err) {
    console.log(err);

    res.json(err);
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const deleteTask = await todoSchema.findByIdAndDelete(req.params.id);
    console.log(deleteTask);
    res.status(200).json("Task Deleted Successfully -> "+ {deleteTask});
  } catch (err) {
    console.log(err);

    res.json(err);
  }
});

module.exports = router;
