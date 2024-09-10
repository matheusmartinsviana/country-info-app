import { useState, useEffect } from 'react';

const useGetCountry = (countryCode) => {
    const [country, setCountry] = useState(null); // Inicialize como null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_GET_COUNTRY_URL;

    const fetchCountry = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}/${countryCode}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Error finding country data');
            }

            const data = await response.json();
            setCountry(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountry();
    }, [countryCode]);

    return { country, loading, error };
};

export default useGetCountry;