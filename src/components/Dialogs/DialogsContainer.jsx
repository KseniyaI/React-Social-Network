import { Navigate } from 'react-router-dom';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreater(text));
		},
		addMessage: (text) => {
			dispatch(addMessageActionCreater(text));
		}
	}
}

export default compose (
	connect (mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);