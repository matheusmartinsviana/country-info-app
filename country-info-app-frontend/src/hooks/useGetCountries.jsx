import { useState, useEffect } from 'react';

const useGetCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_GET_COUNTRIES_URL
    const fetchCountries = async () => {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Error to find countries data');
            }

            const data = await response.json();
            setCountries(data);
            return data;

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return { countries, loading, error };
};

export default useGetCountries;