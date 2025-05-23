import Profile from './Profile';
import s from './Profile.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Children){
	return(props) => 	{

	   const match  = {params: useParams()};
	   return <Children {...props}  match = {match}/>
   }
}

class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 32324;
		}

		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	} 

	render() {
		return <div>
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		</div>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer);