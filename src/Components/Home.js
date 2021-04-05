import React from "react";
//import ColumnIndex from "./ColumnComponents/ColumnIndex";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//components
 import ColumnIndex from './ColumnComponents/ColumnIndex'
import EditColumn from "./Dropdown/EditColumn";




const Home = () => {  
  // <Router>
  //     <div>
  //       <Switch>
  //         <Route path="/:idname" children={<EditColumn />} />
  //       </Switch>
  //     </div>
  //   </Router>
  
  return (
    <>
      <div className="container-fluid">
        <div className="home-cmp overflow-x-scroll ">
            <ColumnIndex />
          </div>
      </div>
    </>
  );
};

export default Home;
