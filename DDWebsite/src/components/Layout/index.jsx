import './index.css'
import Sidebar from '../Sidebar'
import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Main from '../Main'
import Driver from '../Driver'
import Rider from '../Rider' 
import LoginPage from '../LoginPage'

const Layout = () => {
    const [mode, setMode] = useState(true);
    return (
        <>
            <div className = "App">
                <Sidebar></Sidebar>
                <LoginPage/>
                
            </div>
        </>
    )
}

export default Layout;