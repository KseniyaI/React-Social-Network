import s from './Post.module.css';

const Post = (props) => {
	return (	
		<div className={s.item}>
			<img src="https://img.freepik.com/premium-vector/beauty-girl-avatar-character-simple-vector_855703-383.jpg"/>
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post;