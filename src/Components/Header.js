import React from 'react'
import { NavLink, Link }  from 'react-router-dom';


import SideNav from './Sidenav/SideNav';
//import ColumnIndex from "./ColumnComponents/ColumnIndex";

const Header=()=> {

    const styles={
        backgroundColor:'#475562',
        borderBottom:'0.5px white solid', 
        borderTop:'0.5px white solid'
    }

    return (<>

                

        <nav className="navbar navbar-expand-lg" style={styles}>
        < SideNav />
        <a className="navbar-brand text-white" href="#"> Mplanner</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">
            
            <li className="nav-item active">
                  
                    <NavLink className="nav-link text-white" activeClassName="text-white bg-dark" to="/Home"> Home </NavLink>
            </li>

          
           
            </ul>
        </div>
       

        </nav>

            </>)
}


export default Header