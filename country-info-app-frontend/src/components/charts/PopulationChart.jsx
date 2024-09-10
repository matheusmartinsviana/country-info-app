import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = () => {
  const data = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        label: 'População',
        data: [1000, 1200, 1400, 1600, 1800],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'População ao Longo dos Anos',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PopulationChart;