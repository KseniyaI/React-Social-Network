import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreater());
	}

	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreater(text));
	}

	return (
		<Dialogs updateNewMessageText={onMessageChange} 
				 addMessage={addMessage}	
				 dialogsPage={state}
	/>
	)
};

export default DialogsContainer;