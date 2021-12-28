import React from 'react';

import FilterContainer from './FilterContainer';
import RestaurantCards from './RestaurantCards';
import MapContainer from './MapContainer';

export const PassbookContainer = () => {
  return (
    <div class="passbook-container">
      <div class="container">
        <FilterContainer />
      </div>
      <div class="container">
        <div class="columns">
          <RestaurantCards />
          <MapContainer/>
        </div>
      </div>
    </div>
  )
};

export default PassbookContainer;
