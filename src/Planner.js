import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

//Components
//import Newplan from './new'


const Planner=( { match } )=> {

const parentroute=match.path

    return (<>
    <BrowserRouter>
        <div className="container py-5">
            
            <div className="row">
                
                {/*  Left column Block */}
                <div className="col-lg-2">

                    <nav>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={`${parentroute}`}>New Plan</Link>
                            </li>

                            <li className="list-group-item">
                                <Link to={`${parentroute}`}>My Planner</Link>
                            </li>

                            <li className="list-group-item">
                                <Link to={`${parentroute}`}> List</Link>
                            </li>                           

                        </ul>
                    </nav>

                </div>
                {/*  Left column Block */}

                {/*  Right column Block */}
                <div className="col-lg-10">

                    


                <Switch>
                    <Route exact path={parentroute} component={  } />
                    <Route  path={`${parentroute}`} component={  } />
                   
                    <Redirect to={parentroute} />
                </Switch>


                </div>
                 {/*  Right column Block */}
                
            </div>

        </div>
        </BrowserRouter>
    </>)
}


export default Planner