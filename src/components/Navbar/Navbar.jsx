import classes from './Navbar.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";
console.log(classes);
function Navbar(props) {

	return (
		<div>
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}><NavLink to="/Profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink></li>
				<li className={classes.item}><NavLink to="/Dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink></li>
				<li className={classes.item}><NavLink to="/News" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></li>
				<li className={classes.item}><NavLink to="Music" className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink></li>
				<li className={classes.item}><NavLink to="Settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink></li>
			</ul>
		</nav>
			<Friends />

		</div>
	)
}

export default Navbar;