import React, { useState } from 'react'
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";
import './TodoInput.css'

const TodoInput = ({handleAddTask}) => {

  const [task, setTask] = useState();

  const addTodoTask = (e) =>{
    handleAddTask(task, setTask , e);
  }
  return (
    <div className="inputDiv">
          <RxHamburgerMenu className="icon" size={30} />

          {/* Form Used to Add a Task on Enter */}
          <form className="inputForm" onSubmit={(e)=> addTodoTask(e)}>
            <input
              className="inputField"
              placeholder="Enter your TODO Description"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <RxChevronDown
              className="icon"
              size={18}
              // type="submit"
              // onClick={(e)=>addTodoTask(e)}
            />
          </form>
        </div>
  )
}

export default TodoInput