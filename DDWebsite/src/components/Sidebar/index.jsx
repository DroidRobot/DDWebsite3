import './index.css'

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/driver-main-dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/local-driver-active">
                        <i className="ri-car-fill"></i>
                        <span>Driver Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/local-user">
                        <i className="ri-bus-fill"></i>
                        <span>Rider Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/user-profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/driver-faq">
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/user-contact">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </NavLink>
                </li>

            </ul>
        </aside>
    );
};
export default Sidebar;