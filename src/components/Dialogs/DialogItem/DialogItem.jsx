import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.avatarDialog}>
			<div className={s.avatar}>
				<img src={props.img} alt='User avatar' />
			</div>
			<div className={s.dialog}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	)
}

export default DialogItem;