import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'San Francisco',
            }
            });
            setResults(response.data['businesses']); 
        } catch (e) {
            setErrorMessage('Something went wrong.');
        }
    };
    useEffect(() => {
        searchAPI('Pasta');
    }, []);

    return [searchAPI, results, errorMessage];
};

