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

    const borders = country.borders;
    console.log(country);

    return (
        <div>
            <h1>{country.name}, {country.countryCode}</h1>
            <img src={country.flag} alt={`${country.name} Flag`} height={300} width={300} title={`${country.name} Flag`} />
            <p>Population: {country.population}</p>
            <p>Borders:</p>
            <ul>
                {borders.map((border, index) => (
                    <li key={index}>{border.commonName}</li>
                ))}
            </ul>
        </div>
    );
}