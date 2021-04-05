import React, {useState} from 'react'
import './Sidenav.css'
import { NavLink } from 'react-router-dom';



const SideNav=(props)=> {

    const [navOpen,setNavopen] = useState(false)

    const openNav=()=>{
        setNavopen(true)
    }

    const closeNav=()=>{
        setNavopen(false)
    }
    
  
    
    return (<>
       <button className="btn menu-button" onClick={openNav}  >  <i class="fas fa-sliders-h"></i> </button>
        <div  id="mySidenav"  className="sidenavbar" >
             
            <aside className="sidenavbar-t" style={{width: navOpen ? 250 : 0} }  >
                <div className="close-btn" >
                <button  class="btn close-button" onClick={closeNav}  > <i class="fas fa-times"></i> </button>
                </div>
               <div className="sidenav"  >
               <nav className="sidenav-menu">
					<div className="sidenav-list">
                        <NavLink  to="/" className="sidenav-list-item" > <i className="fa fa-fw fa-star-o"></i>Favorites </NavLink>
                        <NavLink  to="/" className="sidenav-list-item" > <i className="fa fa-fw fa-star-o"></i>Favorites </NavLink>
                        <NavLink  to="/" className="sidenav-list-item" > <i className="fa fa-fw fa-star-o"></i>Favorites </NavLink>
                        <NavLink  to="/" className="sidenav-list-item" > <i className="fa fa-fw fa-star-o"></i>Favorites </NavLink>					
					
					</div>
				</nav>
               </div>
          
            </aside>
            
        </div>
    </>)
}

export default SideNav
