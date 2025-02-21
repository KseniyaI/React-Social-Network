const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hello, how are you?', likesCount: 15 },
		{ id: 2, message: "It's post", likesCount: 20 },
		{ id: 3, message: "BlaBla", likesCount: 11 }
	],
	newPostText: ''
};

/*const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}*/

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,	{ 
						id: state.posts.length + 1, 
						message: state.newPostText, 
						likesCount: 0
					}
				],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		default:
			return state;
	}
};

	export const addPostActionCreater = () => ({ type: ADD_POST })
	export const updateNewPostTextActionCreater = (text) =>
		({ type: UPDATE_NEW_POST_TEXT, newText: text })

	export default profileReducer;