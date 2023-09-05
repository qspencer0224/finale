import React from 'react'

function Form({task, setNewTask}) {

  const handleChange = (event) =>{
    //this function is setting whatever we put into our form as a post 
    setNewTask({post: event.target.value})
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type='text' name='post' value={task} />
        <br />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Form
