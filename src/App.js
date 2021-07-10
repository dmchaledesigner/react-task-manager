import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';


// COMPONENTS
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';





function App() {

  // STATE
  // existing tasks

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Work Meeting",
      "day": "Feb 8th at 3:30pm",
      "reminder": true
    }
  ]);





  // FUNCTIONS

  // remove task
  const removeTask = (id) => {
    const removeItem = tasks.filter(task => task.id !== id);
    setTasks(removeItem);
  }


  // double click toggle reminder
  const reminderhandler = (id) => {
    // map over the items and check for the remainder value, spread in object + new reaminder value
    const showHighlight = tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
    setTasks(showHighlight);
  }


  // add item
  const addTaskHandler = (taskItem) => {
    const id = uuidv4();

    const newItem = { id, ...taskItem };
    setTasks([
      ...tasks, newItem
    ])
  }



  // form hide and show
  const [showForm, setShowForm] = useState(false);


  const toggleFormHandler = () => {
    setShowForm(!showForm);


  }


  return (
    <div className="container">

      <Header toggleForm={toggleFormHandler} showForm={showForm} />

      {showForm && <AddTask
        addTaskHandler={addTaskHandler}

      />

      }

      {tasks.length > 0 ?

        <Tasks tasks={tasks}
          reminderClick={reminderhandler}
          removeTaskHandler={removeTask} />

        : 'sorry no tasks to show'

      }



    </div>
  );
}

export default App;
