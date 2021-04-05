import React, { useState,useEffect } from 'react';
import axios from 'axios';


const Addfile=(props)=>
{
    //State management
    const [users,setUsers]=useState([]);


const HandleReadApidata=async ()=>
{
    await axios
    .get('http://localhost:3001/Buckets')
    .then( (apiresult)=> setUsers(apiresult.data) )  
}



//RESTAPI_CALLS
useEffect(()=>{
            HandleReadApidata()
},[])

        return (<>

                <div className="container py-5">
                   
              
                {/* <div className="card">
                    <div className="card-header">
                      {
                          users.map((tlt,index)=>{
                              return( <ul>
                                  <li> {tlt.title} </li>
                              </ul>) 
                          })
                      }
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div> */}

                
              
                            
                                               
                           
                       
               

                   {/* <table className="table table-dark mx-auto my-2">
                       <thead className="thead-light">
                           <tr>
                                 
                               <th>Title</th>
                               <th>Description</th>                               
                           </tr>
                       </thead>

                      <tbody>   
                            {
                                users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                    
                                                    <td>{res.title}</td>
                                                    <td>{res.description}</td>
                                                    </tr>)
                                })
                            }
                    </tbody>
                   </table> */}
                    
                
                </div>

        </>)
    }


export default Addfile