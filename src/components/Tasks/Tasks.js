import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1>My Tasks {tasks.length}</h1>
            <div className='tasks'>
                {
                    tasks.map(task => <Task task={task}
                        key={task.id}></Task>)
                }
            </div>

        </div>
    );
};

export default Tasks;