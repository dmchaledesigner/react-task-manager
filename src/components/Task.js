import React from 'react';

import { FaTimes } from "react-icons/fa";




const Task = ({ task, reminderClick, removeTaskHandler }) => {


    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => reminderClick(task.id)}
        >
            <h3>{task.text}
                <FaTimes
                    onClick={() => removeTaskHandler(task.id)}
                    style={{ color: 'red', }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
