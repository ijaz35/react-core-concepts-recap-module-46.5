import React from 'react';
import './Task.css'

const Task = (props) => {
    const { id, title, completed } = props.task;
    return (
        <div className='task'>
            <h2>ID Number: {id}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Task;