import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID cZKGpN8ASe_Y-gysh958udPql6OvF6mrsoweUZIOs84'
    },
})