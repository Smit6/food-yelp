import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer E-e0JU7FZ0HHUmiMXcif_LZKXJcgC9Bx2qvr7l7Idt4VHN7kp92BIKynFq4MFhmjnl2xQrIkwAIdgzDjd9QIHYbdpmLIiw_2agbe_EBVhq9IVFQnuRJOFsd5TchDYnYx'
    }
});
