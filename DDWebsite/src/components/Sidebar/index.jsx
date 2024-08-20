import './index.css'

const Sidebar = () => {
    return (
        <div className = "navBar">
            <ul className = "sideBar">
                <li className="nav-item">
                    <a className="nav-link "target = "_blank" href="https://youtube.com">
                    <span>Drivers Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " target = "_blank" href = "https://youtube.com">
                    <span>Passengers Dashboard</span>
                    </a>
                </li>
                
            </ul>
        </div>
        
    )
}
export default Sidebar;