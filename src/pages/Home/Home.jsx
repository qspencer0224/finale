import React, { useState } from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form'

function Home() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState({post: ''})
    const [active, setActive] = useState(null)

    const handleChange = (event) =>{
        setNewTask(event.target.value)
    }

    const addTask = async () =>{
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
        const response = await axios.post('/api/posts', newTask);
        const data = await response.json()
        

    }
    return (
        <div>
            <h1>What's New?</h1>
            <div className='home'>
                <div className="left">
                    <div className='addTask'>
                        <input onChange={handleChange} />
                        <button onClick={addTask}>Add</button>
                    </div>
                    <div className="list">
                        {todoList.map((task) =>{
                            return(
                                <div onClick={() =>{setActive(task)}}>
                                    {task}
                                    <button>Delete</button>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
                <div className="mid">
                    {active? <h1>{active}</h1> : null}
                    <Form newTask={newTask} setNewTask={setNewTask} />
                </div>
                <div className="right"></div>
            </div>
        </div>

    )
}

export default Home
