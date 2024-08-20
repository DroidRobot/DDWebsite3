import './index.css'
import {NavLink} from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
        <div>Login Page</div>
            <button><NavLink to="/driver">Login as Driver</NavLink></button>
            <button><NavLink to="/rider">Login as Rider</NavLink></button>

            <main id="main" className="main">

                <section className="section profile">
                <div className="row">
                    <div className="card">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                        <img src="img/logos/alpha_sig_shield_logo.png" alt="Profile" className="rounded-circle"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <form>
                            
                        
                            <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Organization Password</label>
                            </div>
                        
                            <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                            </div>
                            
                        </form>
                        <div className="sign-in-button-container">
                            <form action="user-main-dashboard.html" method="get">
                                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                            </form>
                        </div>
                        </div>
                    </div>

                </div>
                
                </section>

                </main>


        </>
    )
}

export default LoginPage;