
import React from 'react'
import { useState } from 'react'


function Form({active, setActive}) { 
  const [edit, setEdit] = useState(active)
  const handleChange = (event) =>{
    // Update the edit state with the new value from the input
    setEdit(event.target.value)
  }

  const updateEntry = async () =>{
    setActive({ ...active, post: edit})
  }
  return (
    <div>
      <form onSubmit={updateEntry}>
        <input 
        onChange={handleChange} 
        type='text' 
        name='post' 
        value={edit} />
        <br />
        <input 
        type='submit' 
        value='Submit'/>
      </form>
    </div>
  )
}

export default Form
