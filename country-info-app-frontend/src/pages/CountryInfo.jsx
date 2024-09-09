import { useParams } from "react-router-dom";
import useGetCountry from "../hooks/useGetCountry";

export default function CountryInfo() {
    const { countryCode } = useParams();
    const { country, loading, error } = useGetCountry(countryCode);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    console.log(country)
    return (
        <div>
            <h1>{country.name}</h1>
            <img src={country.flag} alt={`${country.name} Flag`} />
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
        </div >
    );
}
