import React, {useEffect,useState} from 'react'
import axios from 'axios'

//components
import AddTask from '../TaskComponents/AddTask'
import BucketList from './../TaskComponents/BucketList'
import ColumnDropdown from '../Dropdown/ColumnDropdown';



function GetColumnData(props) {

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

    return (<>


        
        {
                                props.ColumnList.map( (res,index)=>{
                                    return(<>
                                    <div className="col-md-3  "  >
                                    <div className=" border todolist rounded-3xl  mb-2" key={index}>
                                                  <div className="GetColumnData-header ">
                                                        <div> 
                                                          
                                                            <b> { res.Name } </b>                   
                                                            <span>  < AddTask GetTaskList={GetTaskList} />  </span>                                                        
                                                            <span> < ColumnDropdown Columnid={res.id} GetColumnList={props.GetColumnList}  />  </span>                                                        
                                                        </div>
                                                        <hr/>
                                                        <div> 
                                                               <BucketList tasklist={tasklist} />    
                                                                                                                   
                                                        </div>
                                                 </div>  
                                                     
                                                    
                                      </div>
                                    </div>
                                    </>)
                                })
        }
        
   </> )
}

export default GetColumnData
