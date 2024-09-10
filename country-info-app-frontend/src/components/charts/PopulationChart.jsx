import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ populationData = [], countryName = 'Unknown Country', countryCode = 'Unknown Code' }) => {

  const years = Array.isArray(populationData) && populationData.length > 0
    ? populationData.map((dataPoint) => dataPoint.year)
    : ['Not Found'];
  const populationValues = Array.isArray(populationData) && populationData.length > 0
    ? populationData.map((dataPoint) => dataPoint.value)
    : ['Not Found'];

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population Line',
        data: populationValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: `Population from ${countryName}, ${countryCode} over the years`,
      },
    },
  };

  return (
    <div className='h-48 w-96'>
      <h1 title='Population Graphic' className='text-2xl outline-none mt-5 mb-5'>Population Graphic</h1>
      <Line data={data} options={options} title='Graphic with X(Year) and Y(Population) information' />
    </div>
  )
};

export default PopulationChart;