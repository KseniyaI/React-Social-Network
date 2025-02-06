import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return <div>
		<div>
			<img src="https://cdn.pixabay.com/photo/2016/12/05/11/38/austria-1883647_1280.jpg"></img>
		</div>
		<div className={s.descriptionBlock}>
			ava + description
		</div>
	</div>
}

export default ProfileInfo