import classes from './ProfileInfo.module.css';
function ProfileInfo() {
	return (
		<div >
			<div>
				<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Japan" />
			</div>
			<div className={classes.descriptionBlock}>
				ava + des
				<img src="https://www.portphillip.vic.gov.au/media/l4bc2xgo/copp_local-laws_pets-of-port-phillip_web-banner_0622.jpg?center=0.57191619158284612,0.52646229440739711&mode=crop&width=710&height=710&rnd=133005394387900000" alt="" />
			</div>
		</div>
	)
}
export default ProfileInfo;