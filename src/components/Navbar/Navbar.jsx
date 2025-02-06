import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music'>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings'>Settings</NavLink>
			</div>

			<div className={s.avatarDialog}>
				<div className={s.avatar}>
					<img src={props.img} alt='User avatar' />
				</div>
				<div className={s.dialog}>
					{props.name}
				</div>
			</div>

		</nav>
	)
}

export default Navbar;