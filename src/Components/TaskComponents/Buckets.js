import React, { useState, useEffect }  from 'react'
import axios from "axios";

//tailwind css
//import "../../node_modules/reactjs-popup/dist/index.css";

//Components
import  AddTask from "./AddTask.js";
import BucketList from "./BucketList.js";

const Buckets=(props)=> {

    const [tasklist, setTasklist] = useState([]);

  const GetTaskList = async () => {
    await axios
      .get("http://localhost:3001/Buckets")
      .then((apiresult) => setTasklist(apiresult.data));
  };

  //RESTAPI_CALLS
  useEffect(() => {
    GetTaskList();
  }, []);

    return (
        <div>
            <div>
              <div className="">
                <span className="">
                  < AddTask GetTaskList={GetTaskList} />
                </span>
                <hr />
                <div className="" >
                  <BucketList tasklist={tasklist} />
                </div>
              </div>
            </div>
        </div>
    )
}

export default Buckets
