import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1f23bb6771ca5025ae8477770f5551133ff39cb7574b7e79e90756f2e8ae19c1'
    }
});