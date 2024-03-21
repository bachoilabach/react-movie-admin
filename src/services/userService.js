import axios from '../axious';
const handleLoginApi = (userEmail, userPassword) => {
	return axios.post('/api/login', {
		email: userEmail,
		password: userPassword,
	});
};

const getAllUsers = (inputID) => {
	return axios.get(`/api/get-all-users?id=${inputID}`, {
		userID: inputID,
	});
};

const handleSignUpApi = (userEmail, userPassword, roleID) => {
	return axios.post('/api/create-new-user', {
		email: userEmail,
		password: userPassword,
		roleID: roleID,
	});
};

const handleUpdateUserDataApi = (userData) => {
	console.log(userData)
	return axios.put('/api/edit-user', {
		user: userData,
	});
};

const handleDeleteUserApi = (userID) => {
	console.log(userID);
	return axios.delete('/api/delete-user', {
		data: {
			userID: userID,
		},
	});
};

export {
	handleLoginApi,
	getAllUsers,
	handleSignUpApi,
	handleUpdateUserDataApi,
	handleDeleteUserApi,
};
