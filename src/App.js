import React, { useState } from 'react';
import './App.css';
import BookingForm from './components/BookingForm.js'; // Import Booking Form Component
import FlightResults from './components/FlightResults.js'; // Import Flight Results Component
import { fetchFlightsDirectly } from './services/flightServices.js'; // Import service to fetch flight data
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
//import { RiMapPinLine, RiUser3Line, RiCalendarLine, RiSearchLine}
 import { RiCalendar2Line, RiShieldCheckLine, RiBookmark2Line } from 'react-icons/ri';
 //import FlightSearchForm from './components/FlightSearchForm';
 //import cors from 'cors';
//import handleSearch from './Functions/handleSearch.js';


function App() {
  const [flightData, setFlightData] = useState([]); // State for storing flight data
  const [error, setError] = useState(null);
  //const [location, setLocation] = useState('');
  // Function to handle flight search
  const handleSearch = async (location) => {
    try {
      const data = await fetchFlightsDirectly(location).then({
        method: 'GET', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },  
      }); // Fetch flight data from service
      setFlightData(data);
    } catch (error) {
      console.error('Error fetching flight data:', error);
      setError('Failed to fetch flight data.');
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="nav__logo">AviationMitra</div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Offers</a></li>
          <li className="link"><a href="#">Seats</a></li>
          <li className="link"><a href="#">Destinations</a></li>
        </ul>
        <button className="btn">Contact</button>
      </nav>

      <header className="section__container header__container">
        <h1 className="section__header">Find And Book<br />A Great Experience</h1>
        <img src="assets/header.jpg" alt="header" />
      </header>
      {/*In your App.js file, update the booking section:*/}
{/*<section className="section__container booking__container">
  <div className="booking__nav">
    <span className="active-class">Economy Class</span>
    <span>Business Class</span>
    <span>First Class</span>
  </div>
  <form onSubmit={handleSearch}>
    <div className="form__group">
      <span><RiMapPinLine /></span>
      <div className="input__content">
        <div className="input__group">
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          <label>Location</label>
        </div>
        <p>Where are you going?</p>
      </div>
    </div>
    <div className="form__group">
      <span><RiUser3Line /></span>
      <div className="input__content">
        <div className="input__group">
          <input type="number" id="travellers" value={travellers} onChange={(e) => setTravellers(e.target.value)} min="1" required />
          <label>Travellers</label>
        </div>
        <p>Add guests</p>
      </div>
    </div>
    <div className="form__group">
      <span><RiCalendarLine /></span>
      <div className="input__content">
        <div className="input__group">
          <input type="date" id="departure" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
          <label>Departure</label>
        </div>
        <p>Select departure date</p>
      </div>
    </div>
    <div className="form__group">
      <span><RiCalendarLine /></span>
      <div className="input__content">
        <div className="input__group">
          <input type="date" id="return" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
          <label>Return</label>
        </div>
        <p>Select return date</p>
      </div>
    </div>
    <button className="btn" type="submit"><RiSearchLine /></button>
  </form>
</section>*/}

      <BookingForm onSearch={handleSearch} />
      {/*<FlightSearchForm onSearch={handleSearch} />*/}
      <FlightResults flights={flightData} />

      <section className="section__container plan__container">
        <p className="subheader">TRAVEL SUPPORT</p>
        <h2 className="section__header">Plan your travel with confidence</h2>
        <p className="description">Find help with your bookings and travel plans, and see what to expect along your journey.</p>
        <div className="plan__grid">
          <div className="plan__content">
            <span className="number">01</span>
            <h4>Travel Requirements for Dubai</h4>
            <p>Stay informed and prepared for your trip to Dubai with essential travel requirements.</p>
            <span className="number">02</span>
            <h4>Multi-risk travel insurance</h4>
            <p>Comprehensive protection for your peace of mind.</p>
            <span className="number">03</span>
            <h4>Travel Requirements by destinations</h4>
            <p>Stay informed and plan your trip with ease.</p>
          </div>
          <div className="plan__image">
            <img src="assets/plan-1.jpg" alt="plan" />
            <img src="assets/plan-2.jpg" alt="plan" />
            <img src="assets/plan-3.jpg" alt="plan" />
          </div>
        </div>
      </section>

      <section className="memories">
        <div className="section__container memories__container">
          <div className="memories__header">
            <h2 className="section__header">Travel to make memories all around the world</h2>
            <button className="view__all">View All</button>
          </div>
          <div className="memories__grid">
            <div className="memories__card">
              <span><RiCalendar2Line /></span>
              <h4>Book & relax</h4>
              <p>With "Book and Relax," you can enjoy the journey while we take care of everything else.</p>
            </div>
            <div className="memories__card">
              <span><RiShieldCheckLine /></span>
              <h4>Smart Checklist</h4>
              <p>Innovative solution revolutionizing the way you travel with us.</p>
            </div>
            <div className="memories__card">
              <span><RiBookmark2Line /></span>
              <h4>Save More</h4>
              <p>Discounted ticket prices and exclusive promotions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar components for the rest of the sections */}

      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>AviationMitra</h3>
            <p>Where Excellence Takes Flight. AviationMitra Airlines offers exceptional service and seamless journeys.</p>
          </div>
          <div className="footer__col">
            <h4>INFORMATION</h4>
            <p>Home</p>
            <p>About</p>
            <p>Offers</p>
            <p>Seats</p>
            <p>Destinations</p>
          </div>
          <div className="footer__col">
            <h4>CONTACT</h4>
            <p>Support</p>
            <p>Media</p>
            <p>Socials</p>
          </div>
        </div>
        <div className="section__container footer__bar">
          <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
          <div className="socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaYoutube /></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
