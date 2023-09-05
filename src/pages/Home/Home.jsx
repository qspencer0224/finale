import React, { useState } from 'react'


function Home() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")
    const [active, setActive] = useState(null)

    const handleChange = (event) =>{
        setNewTask(event.target.value)
    }

    const addTask = () =>{
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
        const entry = axios.get()
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
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mid">
                    {active? <h1>{active}</h1> : null}
                </div>
                <div className="right"></div>
            </div>
        </div>

    )
}

export default Home
