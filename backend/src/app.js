const express = require('express');
const app = express();
const cors = require('cors');

const base_url = 'https://date.nager.at/api/v3/';

app.use(express.json());
app.use(cors())

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

        const populationData = await getCountryPopulationData(data.commonName)
        const populationNumber = await getCountryPopulation(data.commonName);
        const countryFlag = await getCountryFlag(countryCode);

        return res.json({
            name: data.commonName,
            countryCode: data.countryCode,
            borders: data.borders,
            population: populationNumber,
            flag: countryFlag,
            populationData: populationData
        });
    } catch (error) {
        console.error('Error fetching country info:', error);
        return res.status(500).json({ error: 'Error fetching country info.' });
    }
});

const getCountryCity = async (countryName) => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country: countryName })
        })
        const result = await response.json()

        if (result.error == true) {
            return data.msg
        }

        const capital = result.data.capital
        return capital
    } catch (error) {

    }
}

const getCountryPopulationData = async (countryName) => {
    try {
        const capital = await getCountryCity('Armenia')
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: capital })
        });
        const result = await response.json()
        if (result.error == true) {
            return result.msg
        }
        const populationData = result.data.populationCounts

        return populationData
    } catch (error) {
        console.error('Error fetching country population:', error);
        throw new Error('Error fetching country population');
    }
}

const getCountryPopulation = async (city) => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city })
        });
        const data = await response.json()
        if (data.error == true) {
            return data.msg
        }
        const populationData = data.data.populationCounts
        const latestPopulation = populationData[populationData.length - 1]
        return latestPopulation ? latestPopulation.value : 'Population data not available'
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

        if (data.error == true) {
            return data.msg
        }

        return data.data.flag;
    } catch (error) {
        console.error('Error fetching country flag:', error);
        throw new Error('Error fetching country flag');
    }
};

app.listen(8000, () => {
    console.log('Server running on port 8000');
});

module.exports = app;
