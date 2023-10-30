import axios from "axios";

const API_URL = 'https://perustarsapi.azurewebsites.net/api/users';

class AuthService{
    login(user){
        console.log('About the request');
        return axios.post(API_URL+'/authenticate', JSON.stringify({
            username: user.username,
            password: user.password}),
            {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                console.log(`Response arrived with status ${response.status}`);
                if (response.data.token){
                    console.log(`user: ${response.data}`);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data.id;
            })
            .catch(function (error){
                if (error.response){
                    console.log(error.response.status);
                    console.log(error.response.data);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log(error.message);
                }
                console.log(error.config);
                return error;
            });
    }
    logout(){
        localStorage.removeItem('user');
    }
    register(user){
        return axios.post(API_URL,{
            // Attributes of the class USER
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();