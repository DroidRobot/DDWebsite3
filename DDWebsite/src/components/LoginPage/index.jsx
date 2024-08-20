import './index.css'
import {NavLink} from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <div>Login Page</div>
            <button><NavLink to="/driver">Login as Driver</NavLink></button>
            <button><NavLink to="/rider">Login as Rider</NavLink></button>


        </>
    )
}

export default LoginPage;