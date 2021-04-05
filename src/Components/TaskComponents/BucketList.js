import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {reset, useForm} from 'react-hook-form'
import ColumnDropdown from '../Dropdown/ColumnDropdown';


const BucketList=(props)=>
{
   
    
//     //State management
//     const [tasklist,setTasklist]=useState([]);


// const HandleReadApidata=async ()=>
// {
//     await axios
//     .get('http://localhost:3001/Buckets)
//     .then( (apiresult)=> setTasklist(apiresult.data) )  
// }



//RESTAPI_CALLS
// useEffect(()=>{
//             HandleReadApidata()
// },[])



        return (<>

                {/* <div className="container-fluid py-3 overflow-y-auto"> */}
                   

                {
                                props.tasklist.map( (res,index)=>{
                                    return(<ul className="card mb-2" key={index}>
                                                  <div className="card-header">
                                                  
                                                       <b> { res.title } </b> 
                                                       {/* <span> < ColumnDropdown Columnid={res.id} GetColumnList={props.GetColumnList}  />  </span>  */}
                                                      
                                                     </div>  
                                                     <div className="card-body">
                                                     {res.description}
                                                     </div>
                                                    
                                                    </ul>)
                                })
                }
               
                    
                
                {/* </div> */}

        </>)
    }


export default BucketList