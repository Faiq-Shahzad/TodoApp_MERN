const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedTime: {
    type: Date,
    default: null,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TODO", todoSchema);
