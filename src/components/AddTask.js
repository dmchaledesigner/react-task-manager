import React, { useState } from 'react';
import Button from './Button';

const AddTask = ({ addTaskHandler, color }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);





    const onSubmithandler = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please enter a task');
            return;
        }

        addTaskHandler({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }



    return (
        <form className="add-form" onSubmit={onSubmithandler}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    placeholder='Add task...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>


            <div className="form-control">
                <label htmlFor="date">Date & Time</label>
                <input
                    type="text"
                    placeholder='Add date and time...'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>



            <div className="form-control form-control-check">
                <label htmlFor="task">Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                />
            </div>

            <Button
                text="submit"
                type='submit'
                color="black"
                style={{ backgroundColor: color }}

            />

        </form>
    )
}

export default AddTask
