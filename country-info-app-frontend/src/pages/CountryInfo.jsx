import { useNavigate, useParams } from "react-router-dom";
import useGetCountry from "../hooks/useGetCountry";
import PopulationChart from "../components/charts/PopulationChart";

export default function CountryInfo() {
    const { countryCode } = useParams();
    const { country, loading, error } = useGetCountry(countryCode);
    const navigate = useNavigate();

    const changeParams = (borderCountryCode) => {
        navigate(`/country/${borderCountryCode}`);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!country) {
        return <p>No country data available.</p>;
    }

    const borders = country.borders || []; // Inicializa com array vazio se `borders` for undefined
    const populationData = Array.isArray(country.population) ? country.population : []; // Garanta que é um array

    if (!Array.isArray(borders)) {
        return <p>No borders available.</p>;
    }

    return (
        <div>
            <h1>{country.name}, {country.countryCode}</h1>
            <img
                src={country.flag}
                alt={`${country.name} Flag`}
                height={300}
                width={300}
                title={`${country.name} Flag`}
            />
            <p>Population: {country.population}</p>
            <p>Borders:</p>
            <ul>
                {borders.map((border) => (
                    <li
                        key={border.countryCode}
                        onClick={() => changeParams(border.countryCode)}
                        style={{ cursor: "pointer", color: "blue" }}
                    >
                        {border.commonName}
                    </li>
                ))}
            </ul>

            <PopulationChart populationData={populationData} />
        </div>
    );
}