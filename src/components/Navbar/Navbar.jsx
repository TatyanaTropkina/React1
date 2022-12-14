import classes from './Navbar.module.css';
import Sidebar from "./Sidebar/Sidebar";
import {NavLink} from "react-router-dom";
// console.log(classes);
function Navbar(props) {

	return (
		<div className={classes.navBar}>
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}><NavLink to="/Profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink></li>
				<li className={classes.item}><NavLink to="/Dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink></li>
				<li className={classes.item}><NavLink to="/News" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></li>
				<li className={classes.item}><NavLink to="Music" className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink></li>
				<li className={classes.item}><NavLink to="Settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink></li>
				<li className={classes.item}><NavLink to="Users" className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink></li>
				<li className={classes.item}><NavLink to="login" className={navData => navData.isActive ? classes.active : classes.item}>Login</NavLink></li>

			</ul>
		</nav>


		</div>
	)
}

export default Navbar;