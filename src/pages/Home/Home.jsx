import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form'
import { set } from 'mongoose'

function Home() {
    // Store the list of tasks
    const [todoList, setTodoList] = useState([])
    // Store the new task input
    const [newTask, setNewTask] = useState({ post: '' })
    // Store the currently active task
    const [active, setActive] = useState(null)
    const [count, setCount] = useState(0)

    // Event handler for input change
    const handleChange = (event) => {
        // Update the newTask state with the input value
        setNewTask({ post: event.target.value })
    }

    // Function to add a new task
    const addTask = async () => {
        // Create a copy of the todoList with the new task
        const newTodoList = [...todoList, newTask];
        // Send a POST request to the '/api/posts' endpoint using Axios
        await axios.post('/api/posts', newTask);
        // Call the getTask function to update the todoList
        getTask()
        // const data = await response.json()
    }

    // Function to fetch tasks from the server
    const getTask = async () => {
        // Send a GET request to the '/api/posts' endpoint using Axios
        const res = await axios.get('/api/posts')
        // Update the todoList state with the data received from the server
        setTodoList(res.data)
    }

    const handleDelete = async (e, id) =>{
        e.preventDefault()
        try {
            await axios.delete(`/api/posts/delete/${id}`)
            setCount(prev => prev + 1)
        } catch (err) {
            console.error(err.message)
        }
    }

    // Call the getTask function when the component mounts
    useEffect(() => {
        getTask()
    }, [count])

    return (
        <div>
            <h1 id='wassup'>What's New?</h1>
            <div className='home'>
                <div className="left">
                    <div className='addTask'>
                        {/* Input field for entering a new task */}
                        <input onChange={handleChange} />
                        {/* Button to add the task */}
                        <button onClick={addTask}>Add</button>
                    </div>
                    <div className="list">
                        {/* Map through the todoList and display tasks */}
                        {/* Check if todoList has at least one item */}
                        {todoList.length > 0 ? todoList.map((task) => {
                            return (
                                // If true (todoList has items), execute the code inside this block

                                <div id='task' onClick={() => { setActive(task) }}>
                                    {/* Display the task and a delete button */}
                                    {task.post}
                                    <button onClick={(e)=>{handleDelete(e, task._id)}}>delete</button>
                                </div>

                            )
                            // If false (todoList is empty), execute the code inside this block
                        }) : null}
                    </div>
                </div>
                <div className="mid">
                    {/* Display the active task */}
                    {active ? <h1>{active.post}</h1> : null}
                    {/* Render the Form component with active task and setActive function */}
                    <Form active={active} setActive={setActive} />
                </div>
                <div className="right"></div>
            </div>
        </div>

    )
}

export default Home
