import axios from "../axious"
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login',{
        email: userEmail,
        password: userPassword
    });
};

const getAllUsers = (inputID)=>{
    return axios.get(`/api/get-all-users?id=${inputID}`,{
        userID: inputID
    })
};

export {handleLoginApi,getAllUsers}