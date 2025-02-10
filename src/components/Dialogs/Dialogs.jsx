import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

	let newMessageElement = React.createRef();

	let addMessage = () => {
		//props.addMessage();
		props.dispatch({ type: 'ADD-MESSAGE' });
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		//props.updateNewMessageText(text);
		let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text };
		props.dispatch(action);
	}

	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<div>
						<textarea onChange={onMessageChange}
							ref={newMessageElement}
							value={props.dialogsPage.newMessageText} />
					</div>
					<div>
						<button onClick={ addMessage }>Add message</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Dialogs;