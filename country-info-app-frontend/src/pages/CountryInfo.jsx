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
        <div className='flex flex-col justify-center items-center'>
            <button className='absolute top-10 left-10 bg-black text-white p-1 rounded w-14' onClick={() => navigate(-1)}>Back</button>
            <div className='flex gap-20 flex-wrap mt-20'>
                <section className=''>
                    <h1 title={`${name}, ${code}`} className=' text-2xl outline-none mt-5 mb-5'>{name}, {code}</h1>
                    <img
                        className='rounded-xl'  
                        src={flag}
                        alt={`${name} Flag`}
                        height={300}
                        width={300}
                        title={`${name} Flag`}
                    />
                    <p title={`Population: ${population}`} className='text-base mt-5'>Population: {population}</p>
                    <p title='Borders Countries' className='text-base mt-1'>Borders Countries:</p>
                    <ul>
                        {borders.map((border) => (
                            <li
                                key={border.countryCode}
                                onClick={() => changeParams(border.countryCode)}
                                className='text-blue-800 underline cursor-pointer hover:translate-x-1 transition-all'
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