import React, { useState } from 'react'
import ListTask from './ListTask';
import AddTask from './AddTask';

const Todo = () => {
  const [tasks, setTasks ]= useState([
    {id:1,title:"learns React"},
    {id:2,title:"learns JS"},
    {id:3,title:"learns dJANGO"},
    {id:4,title:"learns EXPRESS"},
    {id:4,title:"learns Python"},

  ]);
  return (
    <>
    <div className="todo-container">
      <div className="heading">Todo</div>
      <div className="add-task">
        <AddTask/>
      </div>
      <div className="tasks" key={tasks.id}>
        {tasks.map((task)=>(
          <ListTask task={task} />
        ))}
      </div>
    </div>
    </>
  )
  
}

export default Todo