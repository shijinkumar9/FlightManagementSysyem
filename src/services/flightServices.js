// services/flightService.js
// const fetchFlights = async (location) => {
//     const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; // Replace with your actual API key
//     const apiUrl = `/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;
  
//     try {
//       const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`, {mode: 'no-cors'});
//       const data = await response.json();
//       return data.data; // Return the flight data
//     } catch (error) {
//       console.error('Error fetching flight data:', error);
//       throw error;
//     }
//   };
//   export { fetchFlights }
  
  // const fetchFlights = async (location) => {
  //   try {
  //     const response = await fetch(`/api/flights?location=${location}`);
  //     const data = await response.json();
  //     return data.data; // Return the flight data
  //   } catch (error) {
  //     console.error('Error fetching flight data:', error);
  //     throw error;
  //   }
  // };
  
  // export { fetchFlights };
   const fetchFlightsDirectly = async (location) => {
    const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; 
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Flight Data (direct):', data);
        return data;
    } catch (error) {
        console.error('Error fetching data directly:', error);
    }
};
export { fetchFlightsDirectly };

// fetchFlightsDirectly('JFK');
