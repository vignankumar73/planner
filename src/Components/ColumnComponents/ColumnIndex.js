import React,{useState,useEffect} from 'react'
import axios from 'axios'

//components
import CreateColumns from './CreateColumns';
import GetColumnData from './GetColumnData'

function ColumnIndex(props) {
    const [ColumnList, setColumnList] = useState([]);

    const GetColumnList = async () => {
      await axios
        .get("http://localhost:3001/Column")
        .then((apiresult) => setColumnList(apiresult.data));
    };
  
    //RESTAPI_CALLS
    useEffect(() => {
      GetColumnList();
    }, []);
    
    return (<>
        <div>
        <div className="">
              <div className="">
                <div className=" card-title px-3 py-1">
                  {/* < CreateColumns />   */}
                  {/* < CreateColumns GetColumnList={GetColumnList}  /> */}
                </div>
                
                <div  className="row flex-nowrap" >
                  <GetColumnData ColumnList={ColumnList} GetColumnList={GetColumnList}  />                  
                  < CreateColumns GetColumnList={GetColumnList}  />

                </div>
              </div>
            </div>
        </div>
    </>)
}

export default ColumnIndex
