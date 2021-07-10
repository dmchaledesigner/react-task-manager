import React from 'react';
import Task from './Task';



const Tasks = ({
    tasks,
    reminderClick,
    removeTaskHandler,
}) => {
    return (
        <div>
            {
                tasks.map((task, index) => (
                    <Task
                        task={task}
                        key={task.id}
                        reminderClick={reminderClick}
                        removeTaskHandler={removeTaskHandler}
                    />
                ))


            }
        </div>
    )
}

export default Tasks
