import { Link } from "react-router-dom";
import useGetCountries from "../hooks/useGetCountries"

export default function CountryList() {
    const { countries, loading, error } = useGetCountries();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.countryCode}>
                    <Link to={`/country/${country.countryCode}`}>
                        {country.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
