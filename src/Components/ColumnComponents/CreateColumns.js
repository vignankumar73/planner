//import React from 'react'
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import "reactjs-popup/dist/index.css";
import "./../TaskComponents/PopupModel.css";

import axios from "axios";

import "reactjs-popup/dist/index.css";

function CreateColumns(props) {
  const [Column, setColumn] = useState([]);

  const HandleColumnData = (e) => {
    setColumn({ ...Column, [e.target.name]: e.target.value });
  };

  //Submit_method
  async function ColumnSubmitForm(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/Column", Column)
      .then(() => props.GetColumnList());
  }

  return (
    <>
      <div className="CreateColumn">
        <div className="reactjspopup">
          <Popup
            trigger={<button className="btn btn-info "> AddColumn </button>}
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
                  <h1> Add Column </h1>{" "}
                </div>
                <div className="content">
                  <div className="container p-5">
                    <form>
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          name="Name"
                          className="form-control"
                          onChange={HandleColumnData.bind(this)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="actions container">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={ColumnSubmitForm.bind(this)}
                  >
                    ADD Column
                  </button>
                  {/* <button 
        type="reset" 
        className="btn btn-primary" onClick={ submit } >
          reset
          </button> */}

                  <button
                    className="button btn btn-primary ml-3"
                    onClick={() => {
                      close();
                    }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
}

export default CreateColumns;
