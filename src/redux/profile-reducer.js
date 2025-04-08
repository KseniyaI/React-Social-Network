import { type } from "@testing-library/user-event/dist/type";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: 'Hello, how are you?', likesCount: 15 },
		{ id: 2, message: "It's post", likesCount: 20 },
		{ id: 3, message: "BlaBla", likesCount: 11 }
	],
	newPostText: '',
	profile: null
};

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
			case SET_USER_PROFILE:
				return {
					...state, 
					profile: action.profile
				};
		default:
			return state;
	}
};

	export const addPostActionCreater = () => ({ type: ADD_POST })
	export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
	export const updateNewPostTextActionCreater = (text) =>
		({ type: UPDATE_NEW_POST_TEXT, newText: text })

	export default profileReducer;