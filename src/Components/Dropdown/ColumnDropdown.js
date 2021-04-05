import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
import EditColumn from './EditColumn';




function ColumnDropdown(props) {

    const DeleteColumn=async ()=>
    {
        //alert(id)
        
        if(window.confirm(` Do You want delete ${props.Columnid} Record data?` ) )
        {
            await axios
            .delete(`http://localhost:3001/Column/${props.Columnid}`)
                     
        }
       
    }


    
    return (<>

                    
      
                <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-h"></i> 
                  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <Link className="dropdown-item" to="/EditColumn" > Edit     </Link> */}
                    <EditColumn Columnid={props.Columnid} GetColumnList={props.GetColumnList}/>  
                    <a className="dropdown-item" href="#">Another action</a>
                    <button className="dropdown-item" onClick={ ()=> {DeleteColumn() } } >Delete Column</button>
                </div>
         
    </>)
}

export default ColumnDropdown
