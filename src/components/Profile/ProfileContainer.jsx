import Profile from './Profile';
import s from './Profile.module.css';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';
import { getUser, usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
			userId = 2;
		}

		this.props.getUserProfile(userId);

	} 

	render() {
		return <div>
			<Profile {...this.props} profile={this.props.profile}/>
		</div>
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //hoc

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

let WithUrlDataContaierComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContaierComponent);