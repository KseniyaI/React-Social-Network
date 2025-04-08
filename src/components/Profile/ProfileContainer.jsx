import Profile from './Profile';
import s from './Profile.module.css';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

function withRouter(Children){
	return(props) => 	{

	   const match  = {params: useParams()};
	   return <Children {...props}  match = {match}/>
   }
}

class ProfileContainer extends React.Component {

	/* redirectToMainUser() {
        let userId = this.props.match.params.userId;
        // let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 26923; //Пишем Ваш id
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    } */

	componentDidMount() {
		
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			});
	} 
	/* componentDidMount() {
		this.redirectToMainUser();
	} */

	/* componentDidUpdate(prevProps){
        if(this.props.isMain !== prevProps.isMain) {
            if(this.props.isMain){
                this.redirectToMainUser();
            }
        }
    } */

	render() {
		return <div>
			<Profile {...this.props} profile={this.props.profile}/>
		</div>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContaierComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContaierComponent);