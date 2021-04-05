import React from 'react'


import Home from './Home'

const NewPlan=()=> {

    return (<>
            
            <div className="container mt-3">
            <div className="row">
                    <div className="col-sm-4">
                        <Home />
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
            </div>
                
            </div>

        </>)

}


export default NewPlan