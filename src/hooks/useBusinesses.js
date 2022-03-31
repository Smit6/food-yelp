import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Willows'
                }
            });
            setBusinesses(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Something went wrong');
            console.log(error);
        }
    }

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, businesses, errorMessage];
}