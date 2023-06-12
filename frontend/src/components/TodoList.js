import React, { useState } from "react";
import "./TodoList.css";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";


const TodoList = ({ todo, handleUpdateTask, handleDeleteTask }) => {
  const [visible, setVisible] = useState();

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
        <p className="task">{todo.task}</p>
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
            <MdDeleteOutline size={25} onClick={() => handleDeleteTask(todo._id)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
