import axios from 'axios'
import React from 'react'
import { useState } from 'react'


function Form({active, setActive}) { 
  const [edit, setEdit] = useState("")
  const handleChange = (event) =>{
    //this function is setting whatever we put into our form as a post 
    // setNewTask({post: event.target.value})
  }

  const updateEntry = async () =>{
    
  }
  return (
    <div>
      <form>
        {/* <input onChange={handleChange} type='text' name='post' value={active.post} /> */}
        <br />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Form
