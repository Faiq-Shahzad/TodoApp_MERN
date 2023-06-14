import React, { useState } from "react";
import "./TodoList.css";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";

const TodoList = ({ todo, handleUpdateTask, handleDeleteTask }) => {
  const [visible, setVisible] = useState();
  const date = new Date(todo.completedTime);
  const completedStatus =
    date.getDate() +
    "/" +
    date.getMonth() +
    1 +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  // Sending updated item from Child to Parent
  const handeltaskUpdate = (e) => {
    handleUpdateTask(todo._id, !todo.completed);
  };

  return (
    //TODO List
    <div className="todoList">
      <div className="taskDiv">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => handeltaskUpdate(e)}
        />
        <p className="task">
          <p>{todo.task}</p>
          {todo.completedTime == null ? (
            <p className="status">pending</p>
          ) : (
            <p className="status">
              <p>
                {completedStatus}
              </p>
              <BsCheckAll size={18} />
            </p>
          )}
        </p>

        <div className="well">
          <RxDragHandleDots2
            size={30}
            color="darkGreen"
            onClick={() => setVisible(!visible)}
          />
        </div>
        {visible && (
          // Sending item id from Child to Parent for Deletion
          <div>
            <MdDeleteOutline
              size={25}
              onClick={() => handleDeleteTask(todo._id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
