import './App.css';
import { useState } from 'react';
import Header from './Header';
import Task from './Task';


function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  

  // Get String Value 
  const getTextString = event => {
    setTask(event.target.value)
  };


  // Create Tasks when click
  const createTasks = event => {

    setTasks((retrievedTask) => { 
      console.log(task)
      console.log(retrievedTask)
      return [...retrievedTask, task];
    });


    // Clear the Input Field
    setTask("")
    
  };



  // Delete Item
  const deleteItems = id => {
    setTasks((tasks) => {
     return tasks.filter((task, index) => {
        return index !== id;
      })
    })
    return true;
  };

  return (
    <div className="container">
      <div className='wrapper'>
          <Header title="Todo" count={tasks.length}></Header>
          <form action="#" className="form">
              <input type="text" 
                     name="" 
                     id="" 
                     className="control-input" 
                     placeholder='Write'
                     onChange={getTextString}
                     value={task}
                     />
              <button type="submit" 
                      className="btn-add"
                      onClick={createTasks}>Publish</button>
          </form>

          <div className="outpu-list">
              <ul>
                  {tasks.map((task, index) => {
                    return <Task 
                                task={task} 
                                key={index}
                                id={index}
                                deleteItem={deleteItems}>
                            </Task>
                  })}
              </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
