import React, { useState } from 'react';
import { RiMapPinLine, RiUser3Line, RiCalendarLine, RiSearchLine } from 'react-icons/ri';

function BookingForm({ onSearch }) {
  const [location, setLocation] = useState('');
  const [locationFROM, setLocationFROM] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (travellers <= 0) {
      alert('Travellers must be at least 1');
      return;
    }
    //if (new Date(departure) > new Date(returnDate)) {
    //  alert('Return date must be after the departure date.');
    //  return;
    //}

    // Call the search function with form data
    onSearch({ location, travellers, departure, returnDate });
  };

  return (
    <section className="section__container booking__container">
      <form onSubmit={handleSubmit} className="booking__form">
        {/* Location Input */}

        <div className="form__group">
          <span className="icon"><RiMapPinLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="text"
                value={locationFROM}
                onChange={(e) => setLocationFROM(e.target.value)}
                placeholder="City or Airport"
                required
              />
              <label>Location</label>
            </div>
            <p>FROM</p>
          </div>
        </div>

        <div className="form__group">
          <span className="icon"><RiMapPinLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or Airport"
                required
              />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>

        {/* Travellers Input */}
        <div className="form__group">
          <span className="icon"><RiUser3Line /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="number"
                min="1" // Ensure only positive numbers
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                required
              />
              <label>Travellers</label>
            </div>
            <p>How many travellers?</p>
          </div>
        </div>

        {/* Departure Date Input */}
        <div className="form__group">
          <span className="icon"><RiCalendarLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
              <label>Departure</label>
            </div>
            <p>Select departure date</p>
          </div>
        </div>

        {/* Return Date Input */}
        <div className="form__group">
          <span className="icon"><RiCalendarLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                //required
              />
              <label>Return</label>
            </div>
            <p>Select return date</p>
          </div>
        </div>

        {/* Submit Button */}
        <button className="btn search__btn" type="submit">
          <RiSearchLine /> Search
        </button>
      </form>
    </section>
  );
}

export default BookingForm;



/*import React, { useState } from 'react';
import { RiMapPinLine, RiUser3Line, RiCalendarLine, RiSearchLine } from 'react-icons/ri';

function BookingForm({ onSearch }) {
  const [location, setLocation] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location); // Call the search function with the location
  };

  return (
    <section className="section__container booking__container">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <span><RiMapPinLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>

        <div className="form__group">
          <span><RiUser3Line /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="number"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                required
              />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>

        <div className="form__group">
          <span><RiCalendarLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="text"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>

        <div className="form__group">
          <span><RiCalendarLine /></span>
          <div className="input__content">
            <div className="input__group">
              <input
                type="text"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>

        <button className="btn" type="submit"><RiSearchLine /></button>
      </form>
    </section>
  );
}

export default BookingForm;
*/