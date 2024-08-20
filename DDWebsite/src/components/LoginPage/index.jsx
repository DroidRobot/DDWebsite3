import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/img/alpha_sig_shield_logo.png";
import './index.css';

const LoginPage = () => {
    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <NavLink to="/" className="logo d-flex align-items-center">
                        <img src={Logo} alt="Logo" />
                        <span className="d-none d-lg-block">NiceAdmin</span>
                    </NavLink>
                </div>
            </header>

            <main id="main" className="main">
                <section className="section profile">
                    <div className="row">
                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img src={Logo} alt="Profile" className="rounded-circle" />
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <form>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Organization Password</label>
                                    </div>
                                    <div className="form-check text-start my-3">
                                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                </form>
                                <div className="sign-in-button-container">
                                    <NavLink to="/user-main-dashboard">
                                        <button className="btn btn-primary w-100 py-2" type="button">Sign in</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
}

export default LoginPage;
