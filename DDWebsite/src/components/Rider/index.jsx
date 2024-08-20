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
                        {/* Placeholder for Driver content*/}
                    </div>

                    </main>
                </div>
            
            </body>
        </>
    )
}

export default Rider;