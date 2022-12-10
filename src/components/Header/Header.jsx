import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/user-avatar.png"

function Header(props) {
// debugger
// 	let imgSmall = props.profile.photos.small;

	return (
		<header className={classes.header}>
			<img
				src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/wdhrn7hbqx5wzzhxyyw4"
				alt="hh"/>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={"/Login"}>Login</NavLink> }

			</div>
		</header>
	)
}
export default Header;