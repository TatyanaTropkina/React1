import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/user-avatar.png"
import Preloader from "../common/Preloader/Preloader";
import {logout} from "../../redux/auth-reducer";

function Header(props) {
	// if(!props.profile) {
	// 	return <Preloader />
	// }
	if(props.isAuth && !props.profile) {

		// let imgSmall = props.profile.photos.small;
		return <Preloader/>
	}


	return (
		<header className={classes.header}>
			<img className={classes.headerImg}
				src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/wdhrn7hbqx5wzzhxyyw4"
				alt="hh"/>
			<div className={classes.loginBlock}>

				{props.isAuth ? <NavLink to={"/profile"}> {props.login} <button onClick={props.logout}>Log out</button></NavLink> : <NavLink to={"/Login"}>Login</NavLink> }
				{props.isAuth ? <NavLink to={"/profile"}><img className={classes.loginImg} src={props.profile.photos.small ? props.profile.photos.small : avatar}/></NavLink> : null}
			</div>
		</header>
	)
}
export default Header;