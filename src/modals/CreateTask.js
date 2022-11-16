import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


 const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const onChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
      e.preventDefault();
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    } 


    return(
        <>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form  >
            <div className="form-group" >
                <label htmlFor="task-name"> Task Name</label>
                <input type="text" onChange={onChange} name="taskName" className="form-control" value={taskName}  />
            </div>
            <div className="form-group" >
                <label htmlFor="description">Description</label>
                <textarea  rows="5" name="description" aclassName="form-control mt-2" onChange={onChange} value={description}></textarea>
            </div>

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
         Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
 }
 export default CreateTask;
