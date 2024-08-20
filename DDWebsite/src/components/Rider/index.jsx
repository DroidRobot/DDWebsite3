import './index.css'
import React from 'react';

const Rider = () => {
    return (
        <>
            <body>
                <div className="container py-3">
                    <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal text-body-emphasis">Current Drivers</h1>
                        <p className="fs-5 text-body-secondary"></p>
                    </div>
                    </header>
                
                    <main>
                    <div id="content" className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="card-body">

                                <table className="table table-borderless datatable">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Queue</th>
                                    <th scope="col">Current Location</th>
                                    <th scope="col">Destination</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row"><a href="#">#1</a></th>
                                    <td>Playboi Carti</td>
                                    <td><a href="#" className="text-primary">The Hub</a></td>
                                    <td>$64</td>
                                    <td><span className="badge bg-success">Completed</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><a href="#">#2</a></th>
                                    <td>Fonz</td>
                                    <td><a href="#" className="text-primary">The Retreat</a></td>
                                    <td>$47</td>
                                    <td><span className="badge bg-warning">Awaiting pickup</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><a href="#">#3</a></th>
                                    <td>No Neck Nick</td>
                                    <td><a href="#" className="text-primary">Oak House</a></td>
                                    <td>$147</td>
                                    <td><span className="badge bg-success">Completed</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><a href="#">#4</a></th>
                                    <td>Trent</td>
                                    <td><a href="#" className="text-primar">Maple Ridge</a></td>
                                    <td>$67</td>
                                    <td><span className="badge bg-danger">Canceled</span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><a href="#">#5</a></th>
                                    <td>Skibbidi Toilet</td>
                                    <td><a href="#" className="text-primary">Terrace View</a></td>
                                    <td>$165</td>
                                    <td><span className="badge bg-success">Completed</span></td>
                                    </tr>
                                </tbody>
                                </table>

                            </div>
                    </div>

                    </main>
                </div>
            
            </body>
        </>
    )
}

export default Rider;