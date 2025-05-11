import React from 'react'

const AddTask = () => {
  let items=[]
  const addItem=()=>{
    items=document.getElementsByClassName("newtext").innerHTML;
    console.log(items)
    console.log("Adding Item");
  }
  return (
    <div className='newTask'>
        
        <input className="newtext" type="text" placeholder="Add new task"/>
        <button onClick={addItem}>Add</button></div>
    
  )
}

export default AddTask