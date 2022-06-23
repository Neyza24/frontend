import { NavLink } from "react-router-dom";
import "../css/components.css"

const NavBar = () => {

    return (
        <header className="navHeader">
            <nav className="navStyle">
                <img src="page" alt="logo" className="logo"></img>
                <ul className="ulStyle">
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'noActive'} to='/'>HOME</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'noActive'} to='/about'>ABOUT</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'noActive'} to='/experience'>EXPERIENCE</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'noActive'} to='/education'>EDUCATION</NavLink>
                </ul>
            </nav>

        </header>

    )
}

export default NavBar;