import React, { useState } from "react";
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {

  const [modal, setModal] = useState(false)

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3Fc",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#fefaf1",
    },
    {
      primaryColor: "#5dc250",
      secondaryColor: "#f2faf1",
    },
    {
      primaryColor: "#f48687",
      secondaryColor: "#fdf1f1",
    },
    {
      primaryColor: "#b964f7",
      secondaryColor: "#f3f0fd",
    },
  ];

  const toggle = () => {
    setModal(!modal)
  }

  const updateTask = (obj) => {
    updateListArray(obj, index)
  }

const handleDelete = () => {
  deleteTask(index)
}

  return (
   
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ "backgroundColor": colors[index%5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              "backgroundColor": colors[index%5].secondaryColor,
              "border-radius": "10px",
            }}>
            {taskObj.Name}
          </span>
          <p className="mt-3">{taskObj.Description}</p>
          <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
            <i
              className="far fa-edit "
              style={{
                "color": colors[index%5].primaryColor,
                "cursor": "pointer",
                "marginRight": "5px",
              }}
              onClick = {() => setModal(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                "color": colors[index%5].primaryColor,
                "cursor": "pointer",
              }}
         onClick = {handleDelete}
            ></i>
          </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask = {updateTask} taskObj ={taskObj} />
      </div>

  );
};

export default Card;
