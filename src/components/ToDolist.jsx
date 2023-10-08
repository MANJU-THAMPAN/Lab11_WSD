import React, { useState } from 'react'
import '../style/ToDolist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDolist() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false);
  const [showE, setShowE] = useState(false);
  const [filteredTasks,setFilteredTasks] = useState([])
 

  // validate
  const validate = () => {
    var taskInput = document.getElementById('taskInput').value;
    if (!taskInput) {
      window.alert("Can't leave it blank")
    } else {
      addTask(taskInput)
      handleClose()
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseE = () => setShowE(false);
  const handleShowE = (i) => {setShowE(true)};

  // addtask
  const addTask = (taskInput) => {
    setNewTask(taskInput)
    setTasks([taskInput, ...tasks])
    setFilteredTasks([taskInput,...tasks])
  }

  // deletTask
  const deletTask = (value) => {
   const del = filteredTasks.filter(item => item !== value)
   setFilteredTasks(del)
   setTasks(del)
  }
  // // editTask
  // const editTask = (index) => {
  //   handleShowE();
    
  //   var taskInputE = document.getElementById('taskInputE').value;
  //   if (!taskInputE) {
  //     window.alert("Can't leave it blank")
  //   } else {
      
  //     handleCloseE()
  //   }
  // }

  return (
    <>
      <div className='listMain'>
        <div className='listBanner'>
          <h1>Done Right</h1>
          <h5>Your Productivity Partner</h5>
        </div>
        <ul className='list'>
          {newTask.length == 0 ? (
            <li className='li'>Whoo hoo nothing's left to do</li>
          ) : (
            tasks.map((d, i) => (
              <li className='li' key={i}>
                <div className='liText'>{d}</div>
                <div className='liIcon'>
                  <button  onClick={handleShowE} ><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <button onClick={e=>deletTask(d)}> <FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </li>
            ))
          )}
          <li className='addNew-li'><button onClick={handleShow} className='newList'><FontAwesomeIcon icon={faPlus} /> add new Task</button></li>
        </ul>
      </div>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type="text" id='taskInput' /> </Modal.Body>
        <Modal.Footer>
          <button className='modalClose' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className='modalOpen' variant="primary" onClick={validate}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>


      <Modal className='modal' show={showE} onHide={handleCloseE}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type="text" id='taskInputE' /> </Modal.Body>
        <Modal.Footer>
          <button className='modalClose' variant="secondary" onClick={handleCloseE}>
            Close
          </button>
          <button className='modalOpen' variant="primary" onClick={validate}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default ToDolist
