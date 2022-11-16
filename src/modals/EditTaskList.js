import e from "cors";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskList = ({ modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const onChange = (e) => { 
        const {name, value} = e.target

        if(name === 'taskName'){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    } 

    useEffect(()=> {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        updateTask(tempObj)
    }


  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="task-name"> Task Name</label>
              <input
                type="text"
                onChange={onChange}
                name="taskName"
                className="form-control"
                value={taskName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                rows="5" 
                name="description" className="form-control mt-2"
                onChange={onChange}
                value={description}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default EditTaskList;
