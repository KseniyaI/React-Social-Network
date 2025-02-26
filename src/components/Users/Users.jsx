import s from './Users.module.css';

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers( [
			{
				id: 1, photoUrl: 'https://cameralabs.org/media/lab18/12/28-1/Avstraliyskie-pozharnye-s-zhivotnymi-v-blagotvoritelnom-kalendare-2019_1.jpg',
				followed: false, fullName: 'Dmitry', status: 'I am a sporty', location: { country: 'Russia', city: 'Perm' }
			},
			{
				id: 2, photoUrl: 'https://thebtw.com/wp-content/uploads/2023/11/1700650524_15d138500484e38cb9a6cadaa6b565c1-scaled-1.jpg',
				followed: true, fullName: 'Oleg', status: 'I am a boss', location: { country: 'Czech Republik', city: 'Prague' }
			},
			{
				id: 3, photoUrl: 'https://likein.ua/wp-content/uploads/2020/10/australian-firefighters-animals-calendar-2021-13-5f854f98c42d0__700.jpg',
				followed: false, fullName: 'Sasha', status: 'I am skiing', location: { country: 'Austria', city: 'Zell am See' }
			}

		] )
	}


	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={s.userPhoto} />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;