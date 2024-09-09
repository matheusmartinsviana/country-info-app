const express = require('express');
const app = express();

const base_url = 'https://date.nager.at/api/v3/';

app.use(express.json());

app.get('/api/v1/countries', async (req, res) => {
    try {
        const response = await fetch(`${base_url}AvailableCountries`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error('Error fetching countries:', error);
        return res.status(500).json({ error: 'Error fetching countries.' });
    }
});

app.get('/api/v1/CountryInfo/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;

    try {
        const response = await fetch(`${base_url}CountryInfo/${countryCode}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        const populationCount = await getCountryPopulation(data.commonName);
        const countryFlag = await getCountryFlag(countryCode);

        return res.json({
            borders: data.borders,
            population: populationCount,
            flag: countryFlag
        });
    } catch (error) {
        console.error('Error fetching country info:', error);
        return res.status(500).json({ error: 'Error fetching country info.' });
    }
});

const getCountryPopulation = async (city) => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city })
        });

        const data = await response.json();
        const countryPopulation = data.populationCounts;
        return countryPopulation;
    } catch (error) {
        console.error('Error fetching country population:', error);
        throw new Error('Error fetching country population');
    }
};

const getCountryFlag = async (countryCode) => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ iso2: countryCode })
        });

        const data = await response.json();
        const countryFlag = data.flag;
        return countryFlag;
    } catch (error) {
        console.error('Error fetching country flag:', error);
        throw new Error('Error fetching country flag');
    }
};

app.listen(8000, () => {
    console.log('Server running on port 8000');
});

module.exports = app;
