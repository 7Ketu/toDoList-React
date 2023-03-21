import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

function App() {

  //tasks state
  const[toDo,setToDo] = useState([
    
  ]);
// temp state
  const[newTask,setNewTask]=useState('');
  const[updateData,setUpdateData]=useState('');

  //add task
  const addTask = () =>{
    if(newTask){
      let num=toDo.length +1;
      let newEntry={id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry]) 
      setNewTask('');
    }

  }
  //delete taks
  const deleteTask =(id) =>{
    let newTask = toDo.filter(task => task.id!==id )
    setToDo(newTask);
  }

  // cancle update
  const cancelUpdate =() =>{
    setUpdateData('');
  }

  //mark done

  const markDone =(id) =>{
    let newTask = toDo.map(task => {
      if(task.id===id){
        return({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }

  // change task
  const changeTask =(e) =>{
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const updateTask =() =>{
     let filterRecords =[...toDo].filter(task => task.id !== updateData.id)
     let updatedObjects = [...filterRecords, updateData]
     setToDo(updatedObjects);
     setUpdateData('');
  }


  return (
    <div className="container App">
      <br />
      <h2>S2 To Do List App</h2>
      <br />

      

      {updateData && updateData ? (
        <UpdateForm 
        updateData={updateData} 
        updateTask={updateTask} 
        changeTask={changeTask} 
        cancelUpdate= {cancelUpdate}
        />

      ) : (
        <AddTaskForm 
        newTask={newTask}
         setNewTask={setNewTask}
          addTask= {addTask}
        />
    )}







      {/* {Display ToDos} */}

      {toDo && toDo.length ? '' : 'NO TASKS...'}

      <ToDo
      toDo={toDo}
       markDone={markDone}
      setUpdateData={setUpdateData} 
      deleteTask={ deleteTask}
      />

    </div>
  );
}

export default App;
