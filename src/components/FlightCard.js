import React from 'react';

const FlightCard = ({ flight }) => {
  const {
    flight_date,
    flight_status,
    departure,
    arrival,
    airline,
    flight: flightDetails
  } = flight;

  console.log(flight.flight_date);

  return (
    <div className="flight__card">
      <h3>{airline?.name || 'Unknown Airline'}</h3>
      <p><strong>Flight Date:</strong> {flight_date || 'N/A'}</p>
      <p><strong>Status:</strong> {flight_status || 'N/A'}</p>
      <p><strong>Departure Airport:</strong> {departure?.airport?.trim() || 'N/A'}</p>
      <p><strong>Arrival Airport:</strong> {arrival?.airport?.trim() || 'N/A'}</p>
      <p><strong>Scheduled Departure:</strong> {departure?.scheduled || 'N/A'}</p>
      <p><strong>Scheduled Arrival:</strong> {arrival?.scheduled || 'N/A'}</p>
      <p><strong>Flight Number:</strong> {flightDetails?.number || 'N/A'}</p>
    </div>
  );
};

export default FlightCard;

/*import React from 'react';

function FlightCard({ flight }) {
  return (
    <div className="flight__card">
      <h3>{flight.airline.name}</h3>
      <p>Flight: {flight.flight.iata}</p>
      <p>Departure: {flight.departure.iata} - {flight.departure.scheduled}</p>
      <p>Arrival: {flight.arrival.iata} - {flight.arrival.scheduled}</p>
    </div>
  );
}

export default FlightCard;*/
