import './index.css'
import React from 'react';

const Driver = () => {
    return (
        <>
            <body>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Driver Dashboard</h1>
                    </div>{/*  End Page Title */}

                    <section className="section dashboard">
                        
                        <div className="row"> {/*  queue row*/}
                        {/*  Driver Queue */}
                        <div className="col-12">
                            <div className="card recent-sales overflow-auto">

                            <div className="card-body">
                                <h5 className="card-title">Queue</h5>

                                <table className="table table-borderless datatable">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Passenger</th>
                                    <th scope="col">Pickup</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Status</th>
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
                        </div>{/*  End Recent Trips */}
                        </div> {/*  End Queue Row*/}

                    </section>
                </main>

                </body>
        </>
    )
}

export default Driver;