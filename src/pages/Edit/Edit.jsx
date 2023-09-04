import React from 'react'

function Edit(props) {
  return (
    <div>
      <form>
        <input 
        type='text' 
        name='' 
        value={props.current.post} />
        <input type='submit' name='' value="Submit" />
      </form>
      
    </div>
  )
}

export default Edit
