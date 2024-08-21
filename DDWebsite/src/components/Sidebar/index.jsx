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
                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                <a className="nav-link collapsed" href="user-profile.html">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </a>
                </li>

                <li className="nav-item">
                <a className="nav-link collapsed" href="driver-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                </a>
                </li>
                

                <li className="nav-item">
                <a className="nav-link collapsed" href="user-contact.html">
                    <i className="bi bi-envelope"></i>
                    <span>Contact</span>
                </a>
                </li>
            </ul>
        </div>
        
    )
}
export default Sidebar;