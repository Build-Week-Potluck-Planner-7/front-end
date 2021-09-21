import axios from 'axios';

const axiosWithAuth=()=>{
    const token = localStorage.getItem('token');
    return axios.create({
        headers:{
            Authorization:token
        },
        baseUrl: "https://potluck-planner-7.herokuapp.com/api"
    });
}
export default axiosWithAuth