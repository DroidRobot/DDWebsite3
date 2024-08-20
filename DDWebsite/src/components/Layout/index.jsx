import './index.css'
import Sidebar from '../Sidebar'
import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Main from '../Main'
import Driver from '../Driver'
import Rider from '../Rider'

const Layout = () => {
    const [mode, setMode] = useState(true);
    return (
        <>
            <div className = "App">
                <button className="changeMode" type="button" onClick={() => setMode(!mode)}>
                    Change Mode
                </button>

                <div className = "display">
                    {mode ? <Driver/> : <Rider/>}
                </div>
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;