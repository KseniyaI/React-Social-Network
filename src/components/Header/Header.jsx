import s from './Header.module.css';

const Header = () => {
	return <header className={s.header}>
		<img src='/logo.png' alt='logo'></img>
		<p>Network for<br />You</p>
  	</header>
}

export default Header;