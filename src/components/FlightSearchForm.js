import React, { useState } from 'react';
import axios from 'axios';
import FlightResults from './FlightResults';

const FlightSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const [flights, setFlights] = useState([]); // State for storing flight data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    setLoading(true); // Set loading state to true when the search starts
    setError(null); // Clear any previous errors

    try {
      // Make API request to fetch flights based on search query
      const response = await axios.get(`/v1/flights?access_key=7de0bfa5d6154470e5a56806adeced96?query=${searchQuery}`);
      console.log(response.data);
      setFlights(response.data.data); // Update flights state with fetched data
    } catch (err) {
      setError('Failed to fetch flights. Please try again.'); // Set error state on failure
    } finally {
      setLoading(false); // Set loading state to false once the API call is done
    }
  };

  return (
    <div className="flight-search-container">
      {/* Flight Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          placeholder="Enter flight number or route"
          className="search-input"
        />
        <button type="submit" className="search-button">Search Flights</button>
      </form>

      {/* Loading Spinner */}
      {loading && <p className="loading">Loading flights...</p>}

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Display flight results if available */}
      {flights.length > 0 && <FlightResults flights={flights} />}
    </div>
  );
};

export default FlightSearchForm;
