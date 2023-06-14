const { Router } = require("express");
const { postTask, getTasks, updateTask, deleteTask } = require("../controllers/todoController");

const router = Router();

router.post("/addtask", postTask)
router.get("/", getTasks)
router.put("/task/:id", updateTask)
router.delete("/task/:id", deleteTask)


module.exports = router;