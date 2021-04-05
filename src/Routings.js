import React from 'react';
import { BrowserRouter, Route, Switch, Redirect }  from 'react-router-dom';


//import Information/view Components...
import Header from './Components/Header'
//import NewPlan from './Components/NewPlan';
//import Sidebar from './Components/SideNav'
//import Sidenav from './Sidenav'
import Home from './Components/Home'
import EditColumn from './Components/Dropdown/EditColumn';

//import Footer from './Footer.js'



//Nested_Routing Components for Training[main Routing]
import NewPlan from './Components/NewPlan'






const Routings=()=> 
{
    return (<>

<BrowserRouter>

               {/* navbar Component */ }
               
                <Header />   
               
               {/* navbar Component */ }
                
             <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/Home' component={Home} />

                <Route path='/EditColumn/edit/:idname' component={EditColumn} />




                
               
                

                

            
                {/* <Redirect to="/home" /> */}
              
            </Switch>


                  {/* Footer Component */ }
               
                  
               
                  {/* Footer Component */ }

                
</BrowserRouter>

    </>)
}


export default Routings