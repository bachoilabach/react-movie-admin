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

const handleSignUpApi = (userEmail, userPassword,roleID)=>{
    return axios.post('/api/create-new-user',{
        email: userEmail,
        password: userPassword,
        roleID: roleID
    })
}

export {handleLoginApi,getAllUsers,handleSignUpApi}