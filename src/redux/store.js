import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hello, how are you?', likesCount: 15 },
				{ id: 2, message: "It's post", likesCount: 20 },
				{ id: 3, message: "BlaBla", likesCount: 11 }
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Kseniia', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN15Fc123gzwhYHcZ9fwgqfvSBdvk0uM-0yQ&s' },
				{ id: 2, name: 'Grigorii', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ-HkOk0nyWwdR6GNhI19KyuIDOyg-_w_tQ&s' },
				{ id: 3, name: 'Roman', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WVmYbXwi09tHVUgdjgz5HtggaB9rhA3zrw&s' },
				{ id: 4, name: 'Anastasiia', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKNy38wfvGKqs5oRzuMwpgywiTlF4FmHZ2JRDG2JUWXl3l7wHP_zcQ8adJLDvEMBsiCg&usqp=CAU' },
				{ id: 5, name: 'Irina', img: 'https://img.freepik.com/vetores-premium/avatar-de-mulher-loira-retrato-de-uma-jovem-ilustracao-em-vetor-de-um-rosto_217290-581.jpg' },
				{ id: 6, name: 'Marina', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fT-a6m0Q1VspoXNU1yeRoVH6hcYodv6KrkU-KkLSv9vxad5ixP69nWYitXuw5J63eiY&usqp=CAU' }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you' },
				{ id: 3, message: 'Hello' },
				{ id: 4, message: 'Yo' }
			],
			newMessageText: ''
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Kseniia', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN15Fc123gzwhYHcZ9fwgqfvSBdvk0uM-0yQ&s' },
				{ id: 2, name: 'Grigorii', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ-HkOk0nyWwdR6GNhI19KyuIDOyg-_w_tQ&s' },
				{ id: 3, name: 'Roman', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WVmYbXwi09tHVUgdjgz5HtggaB9rhA3zrw&s' }
			]
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;
//store - OOP