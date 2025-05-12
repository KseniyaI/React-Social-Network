import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {
		"API-KEY": "d9241b4c-5381-422e-b05b-81e1bde05daa"
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10	) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile (userId) {
		console.warn('Please use profileAPI object')
		return profileAPI.getProfile(userId);			
	}
}

export const profileAPI = {
	getProfile (userId) {
		return instance.get(`profile/` + userId);			
	},
	getStatus (userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus (status) {
		return instance.put(`profile/status/`, { status: status });
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	}
}

/* export const auth = () => {
	return instance.get(`auth/me`)
	.then(response => {
		return response.data;
	});
} */


/* export const followApi = (id) => {
	return instance.post(`follow/${id}`)
	.then(response => {
		return response.data;
	});
}

export const unfollowApi = (id) => {
	return instance.delete(`follow/${id}`)
	.then(response => {
		return response.data;
	});
} */
