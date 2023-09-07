
import React from 'react'
import { useState } from 'react'


function Form({active, setActive}) { 
   // Initialize the 'edit' state with the 'active' prop
  const [edit, setEdit] = useState(active)
  // Event handler to update the 'edit' state when the input value changes
  const handleChange = (event) =>{
    // Update the edit state with the new value from the input
    setEdit(event.target.value)
  }

  // Function to handle form submission
  const updateEntry = async () =>{
    // Update the 'active' state by creating a new object with the same 'active' properties,
    // but with the 'post' property replaced by the 'edit' state
    setActive({ ...active, post: edit})
  }
  return (
    <div>
      <form className='midinput' onSubmit={updateEntry}>
        <input 
        id='midinput'
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
