import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

	let state = props.dialogsPage; //???

	let newMessageElement = React.createRef();
	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);


	let addMessage = () => {
		//props.addMessage();
		props.addMessage();
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	}

	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div> 
					{messagesElements}
				</div>
				<div>
					<div>
						<textarea placeholder='Enter your message'
							onChange={onMessageChange}
							ref={newMessageElement}
							value={props.dialogsPage.newMessageText} />
					</div>
					<div>
						<button onClick={ addMessage }>Send message</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Dialogs;