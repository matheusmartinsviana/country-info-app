import React from 'react';
import PropTypes from 'prop-types';

const PopulationChart = ({ populationData }) => {

  const data = Array.isArray(populationData) ? populationData : [];

  return (
    <div>
      <h2>Population Chart</h2>
      {data.length === 0 ? (
        <p>No population data available.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.city}: {item.population}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

PopulationChart.propTypes = {
  populationData: PropTypes.array
};

export default PopulationChart;