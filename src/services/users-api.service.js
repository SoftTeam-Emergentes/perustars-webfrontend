
import authHeader from "./auth-header";
import axios from "axios";

const API_URL = 'https://perustarsapi.azurewebsites.net/api/users';

class UsersApiService {
    getAll(){
        console.log(authHeader());
        return axios.get(API_URL, {headers: authHeader()});
    }
}
export default new UsersApiService();