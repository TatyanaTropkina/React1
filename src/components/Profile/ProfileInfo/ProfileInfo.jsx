import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/images/user-avatar.png";
function ProfileInfo(props) {
    if(!props.profile) {
        return <Preloader/>
    }
	let facebook = props.profile.contacts.facebook;
	let vk = props.profile.contacts.vk;
	let website = props.profile.contacts.website;
	let twitter = props.profile.contacts.twitter;
	let instagram = props.profile.contacts.instagram;
	let youtube = props.profile.contacts.youtube;
	let github = props.profile.contacts.github;
	let mainLink = props.profile.contacts.mainLink;
	let imgLarge = props.profile.photos.large;
	let imgDefault = avatar;
	return (
		<div >
			<div className={classes.descriptionIntro}>
				<img
					src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
					alt="Japan"/>
			</div>
			<div className={classes.profile}>
				<h1>About me</h1>
				<h3 className={classes.profileName}>{props.profile.fullName}</h3>

				<img className={classes.profileImg} src={imgLarge ? imgLarge : imgDefault} alt="Photo"/>
				<p className={classes.profileStatus}>{props.profile.status}</p>
				<div>
					<h4>Jobs status</h4>
					<p>Looking for a job: {props.profile.lookingForAJob ? "да" : "нет"}</p>
					<p>Description status: {props.profile.lookingForAJobDescription}</p>
				</div>
				<div>
					<h4>Contacts</h4>
					<ul>
						{facebook != null ? <li>facebook: <a href={facebook}>{facebook}</a></li> : ""}
						{website != null ? <li>website: <a href={website}>{website}</a></li> : ""}
						{vk != null ? <li>vk: <a href={vk}>{vk}</a></li> : ""}
						{twitter != null ? <li>twitter: <a href={twitter}>{twitter}</a></li> : ""}
						{instagram != null ? <li>instagram: <a href={instagram}>{instagram}</a></li> : ""}
						{youtube != null ? <li>youtube: <a href={youtube}>{youtube}</a></li> : ""}
						{github != null ? <li>github: <a href={github}>{github}</a></li> : ""}
						{mainLink != null ? <li>mainLink: <a href={mainLink}>{mainLink}</a></li> : ""}

					</ul>
				</div>
			</div>
			<div className={classes.descriptionBlock}>

			</div>

		</div>
	)
}
export default ProfileInfo;