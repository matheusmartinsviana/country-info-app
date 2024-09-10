import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetCountry from '../hooks/useGetCountry';
import PopulationChart from '../components/charts/PopulationChart';

export default function CountryInfo() {
    const { countryCode } = useParams();
    const { country, loading, error } = useGetCountry(countryCode);
    const [countryData, setCountryData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (country) {
            setCountryData(country);
        }
    }, [country]);

    if (loading) {
        return <p className='flex justify-center items-center'>Loading country...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!countryData) {
        return <p>No country data available.</p>;
    }

    const { name, countryCode: code, flag, population, borders, populationData } = countryData;

    const changeParams = (borderCountryCode) => {
        navigate(`/country/${borderCountryCode}`);
    };

    if (!borders || !Array.isArray(borders)) {
        return <p>No borders available.</p>;
    }

    return (
        <div className='flex flex-col justify-center items-center transition-all'>
            <button className='absolute top-10 left-10 bg-black text-white p-1 rounded w-14' onClick={() => navigate(-1)}>Back</button>
            <div className='flex gap-20 flex-wrap m-20'>
                <section>
                    <h1 title={`${name}, ${code}`} className=' text-2xl outline-none mt-5 mb-5'>{name}, {code}</h1>
                    <img
                        className='rounded-xl shadow-lg'
                        src={flag}
                        alt={`${name} Flag`}
                        height={300}
                        width={300}
                        title={`${name} Flag`}
                    />
                    <p title={`Population: ${population}`} className='text-base mt-5'><strong>Population:</strong> {population === 'city data not found' ? population : Number(population).toLocaleString('en-US')}</p>
                    <p title='Borders Countries' className='text-base mt-1'><strong>Borders Countries:</strong></p> 
                    <ul>
                        {borders.map((border) => (
                            <li
                                key={border.countryCode}
                                onClick={() => changeParams(border.countryCode)}
                                className='block px-4 py-2 text-gray-700 hover:translate-x-1 transition-all w-32 cursor-pointer underline'
                                title={`Go to ${border.commonName} info`}
                            >
                                {border.commonName}
                            </li>
                        ))}
                    </ul>
                </section>

                <PopulationChart
                    populationData={populationData}
                    countryName={name}
                    countryCode={code}
                />
            </div>
        </div>
    );
}