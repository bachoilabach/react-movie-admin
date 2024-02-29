import axios from "../../axious"
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login',{
        email: userEmail,
        password: userPassword
    });
};

export default handleLoginApi