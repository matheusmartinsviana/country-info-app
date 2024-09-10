import { Link } from 'react-router-dom';
import useGetCountries from '../hooks/useGetCountries';
import { useState } from 'react';
import Article from '../components/Article';

export default function CountryList() {
    const { countries, loading, error } = useGetCountries();

    if (loading) {
        return <p className='text-gray-500'>Loading...</p>;
    }

    if (error) {
        return <p className='text-red-500'>Error: {error}</p>;
    }

    return (
        <>
            <div className='flex gap-10 flex-wrap justify-center items-start mt-12 align-top'>
                <Article
                    title={`Explore ${countries.length} Countries`}
                    description='See diverse information about all countries in the world.'
                />
                <section className='flex flex-col justify-center items-center gap-2'>
                    <h1 title='List of countries' className=' text-3xl'>List of Countries</h1>
                    <p
                        title='Click on the country to get an overview of the population, see the flag and the countries that border it.'
                        className='w-96 text-center'>
                        <strong>Click on the country</strong> to get an overview of the population, see the flag and the countries that border it.
                    </p>

                </section>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <main className='flex flex-wrap justify-center items-center m-20'>
                    {countries.map((country) => (
                        <li key={country.countryCode} className='hover:bg-gray-100 list-none'>
                            <Link
                                to={`/country/${country.countryCode}`}
                                className='block px-4 py-2 text-gray-700 hover:translate-x-1 transition-all'
                                title={`See ${country.name} details`}
                            >
                                {country.name}
                            </Link>
                        </li>
                    ))}
                </main>

            </div>
        </>
    );
}
