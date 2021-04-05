import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import { useParams, useHistory, Route } from 'react-router-dom';
import ColumnDropdown from './ColumnDropdown'



function EditColumn(props) {
   
   
    const history = useHistory();

    const [Editcolumntitle,setEditcolumntitle]=useState({Name:''})

    const {Name} = Editcolumntitle
 

    const HandleFormControlsData = (e) => {
        setEditcolumntitle({ ...Editcolumntitle, [e.target.name]: e.target.value });
    }


    const HandleSubmitForm = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:3001/Column/${props.Columnid}`,Editcolumntitle)
           // .then(() => history.push('/Home'))
            .then(() => props.GetColumnList());

            
    }

    return (<>

                    
        <div className="dropdown-item" >
       
            <Popup trigger={<button className="button w-100"> Edit </button>} modal>
                     <div className="container p-5">

            <form onSubmit={HandleSubmitForm.bind(this)}>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="Name"
                        className="form-control"
                        value={Name}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>              

                <button
                    type="submit"
                    className="btn btn-primary">Update</button>               

            </form>
            </div>
            </Popup>

        </div>
   </> )
}

export default EditColumn
