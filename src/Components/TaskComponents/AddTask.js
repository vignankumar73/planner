import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

import "reactjs-popup/dist/index.css";
import "./PopupModel.css";

import axios from "axios";


const AddTask = (props) => {
  const { reset } = useForm();

  const [Task, setTask] = useState([]);

 

  const myForm = useRef(null);

  const ResetFormData = () => {
    myForm.current.reset(); // will reset the entire form :)
  };

  //get all formControls values using name and value and asisgn to state using spread Operator...
  const HandleFormControlsData = (e) => {
    setTask({ ...Task, [e.target.name]: e.target.value });
  };

  //Submit_method
  async function HandleSubmitForm(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/Buckets", Task)
      // .then(() => history.push('/Home'));

      .then(() => props.GetTaskList())
      .then(() => ResetFormData());
  }

  return (
    <>
      <Popup
        trigger={<button className="fas fa-plus"></button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal-popup">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {" "}
              <h1> Add Task </h1>{" "}
            </div>
            <div className="content">
              <div className="container p-5">
                <form ref={myForm}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={HandleFormControlsData.bind(this)}
                      
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={HandleFormControlsData.bind(this)}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="actions">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={HandleSubmitForm.bind(this)}
              >
                Submit
              </button>
              {/* <button 
        type="reset" 
        className="btn btn-primary" onClick={ submit } >
          reset
          </button> */}

              <button
                className="button btn btn-primary"
                onClick={() => {
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default AddTask;
