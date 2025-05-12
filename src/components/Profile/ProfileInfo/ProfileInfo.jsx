import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return <div>
		{/* <div>
			<img src="https://cdn.pixabay.com/photo/2016/12/05/11/38/austria-1883647_1280.jpg"></img>
		</div> */}
		<div className={s.descriptionBlock}>
			<img src={props.profile.photos.large} />
			<h5>{props.profile.aboutMe}</h5>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
		</div>
	</div>
}

export default ProfileInfo;