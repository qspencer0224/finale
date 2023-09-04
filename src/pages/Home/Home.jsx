import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Home(props) {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h1>What's New?</h1>
            <div className='home'>
                <div className="leftnav">
                    <div className='addTask'>
                        <input onChange={handleChange} />
                        <button onClick={addTask}>Add</button>
                    </div>
                    {/* Can i assign a value to my useState value from the props that I- */}
                    {/* -passed down from my server.js??? */}
                    <div className="list">
                        {/* this is props coming from my server.js */}
                        <Link to={`/edit/${props.currentTask.id}`}>
                            {/* this is coming from my useState variable */}
                            {todoList.map((task, i) => {
                                return (
                                    <div key={i}>
                                        {task}
                                    </div>
                                )
                            })}
                        </Link>
                        <form action=''></form>
                    </div>
                </div>
                <div className="mid">
                    <Marquee>
                        <div>* MY MEDIA *</div>
                    </Marquee>
                </div>
            </div>
        </div>

    )
}

export default Home
