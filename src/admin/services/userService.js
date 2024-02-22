import axios from "../../axious"
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login',{
        Email: userEmail,
        Password: userPassword
    });
};

export default handleLoginApi