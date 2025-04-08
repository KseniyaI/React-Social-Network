import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return <header className={s.header}>
		<div className={s.logoBlock}>
			<img src='/logo.png' alt='logo'></img>
			<p>Network for<br />You</p>
		</div>

		<div className={s.loginBlock}>
			{ props.isAuth ? props.login
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
}

export default Header;