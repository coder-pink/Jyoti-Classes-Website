import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
        <header>
            <div className="nav-container">
                <div className="logo">
                <NavLink to="/" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
  <img src="jc.svg" alt="JC Logo" width="40" height="35" style={{ verticalAlign: 'middle' }} /> <span style={{color: '#f25939'}}>Jyoti  </span>  <span style={{color: "#f3f2f7"}}>Classes</span>
</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
        </>
    )
}

export default Navbar