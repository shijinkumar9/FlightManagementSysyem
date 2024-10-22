import React from 'react';
import FlightCard from './FlightCard'; // Import Flight Card component

function FlightResults({ flights=[] }) {
  if (!flights || flights.length === 0) return <p className='Errorwarn'>No flights found</p>; // Handle case when no flights are returned
  
  return (
    <section className="section__container flight-results">
      <h2>Available Flights</h2>
      <div className="flight__list">
        {/*{flights.map((flight, index) => (
          <FlightCard flight={flight} key={index} /> // Render each flight as a card, using index as a fallback key
        ))}*/}


<div style={{paddingRight: '15px', width: '1170px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', boxSizing: 'border-box'}}>

    {/* <h3 style={{fontFamily: 'Promo, Helvetica, Arial, sans-serif', fontWeight: 300, fontSize: '25px', marginBottom: '0px', marginTop: '0px', textAlign: 'center', lineHeight: '43px', color: 'rgb(51, 51, 51)', boxSizing: 'border-box'}}>Any flight worldwide, at your fingertips</h3>
    <h4 style={{fontWeight: 300, fontSize: '18px', margin: '10px auto 40px', lineHeight: 'normal', textAlign: 'center', maxWidth: '880px', marginTop: '10px', marginBottom: '40px', fontFamily: '"Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif', color: 'rgb(51, 51, 51)', boxSizing: 'border-box'}}>Whether it's building booking platforms, visualizing and monitoring global flights or creating popular flight tracking applications — our flight data API is used by thousands every day. </h4>
    <div style={{maxWidth: '875px', margin: '0px auto', boxSizing: 'border-box'}}>

        <form name="demo_inputs" style={{textAlign: 'left', padding: '0px', borderRadius: '3px', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'hidden', boxShadow: 'rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px', boxSizing: 'border-box'}}>

            <div style={{display: 'inline-block', width: 'auto', textAlign: 'left', borderRight: '0.8px solid rgba(0, 0, 0, 0.1)', position: 'relative', paddingLeft: '35px', boxSizing: 'border-box'}}>
                <input type="text" name="demo_airline" value="" placeholder="Airline (e.g. United Airlines)" fdprocessedid="x8286r" style={{borderRadius: '0px', padding: '0px 10px', width: '235px', height: '55px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', fontFamily: '"Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif', fontSize: '14px', lineHeight: '19.6px', boxSizing: 'border-box', color: 'rgb(51, 51, 51)', margin: '0px'}} />
            </div>
            <div style={{marginLeft: '-4px', display: 'inline-block', width: 'auto', textAlign: 'left', borderRight: '0.8px solid rgba(0, 0, 0, 0.1)', position: 'relative', paddingLeft: '35px', boxSizing: 'border-box'}}>
                <input type="text" name="demo_flight_number" value="" placeholder="Flight Number (e.g. UA2402)" fdprocessedid="xpdsqq" style={{borderRadius: '0px', padding: '0px 10px', width: '235px', height: '55px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', fontFamily: '"Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif', fontSize: '14px', lineHeight: '19.6px', boxSizing: 'border-box', color: 'rgb(51, 51, 51)', margin: '0px'}} />
            </div>
            <div style={{border: '0px none rgb(51, 51, 51)', display: 'inline-block', width: 'auto', textAlign: 'left', borderRight: '0px none rgb(51, 51, 51)', position: 'relative', paddingLeft: '35px', boxSizing: 'border-box'}}>
                <select name="demo_date" fdprocessedid="bty21r" style={{position: 'relative', width: '138px', appearance: 'none', zIndex: 1, borderRadius: '0px', border: '0px none rgb(51, 51, 51)', padding: '0px 10px', height: '55px', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', fontFamily: '"Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif', fontSize: '14px', lineHeight: '19.6px', boxSizing: 'border-box', textTransform: 'none', color: 'rgb(51, 51, 51)', margin: '0px'}}>

                    <option disabled="" style={{boxSizing: 'border-box'}}>Choose Date</option>
                    <option value="2024-10-18" style={{boxSizing: 'border-box'}}>2024-10-18</option>
                    <option value="2024-10-19" style={{boxSizing: 'border-box'}}>2024-10-19</option>
                    <option value="2024-10-20" style={{boxSizing: 'border-box'}}>2024-10-20</option>
                    <option value="2024-10-21" selected="" style={{boxSizing: 'border-box'}}>Today</option>
                    <option value="2024-10-22" style={{boxSizing: 'border-box'}}>2024-10-22</option>
                    <option value="2024-10-23" style={{boxSizing: 'border-box'}}>2024-10-23</option>
                    <option value="2024-10-24" style={{boxSizing: 'border-box'}}>2024-10-24</option>
                </select>
            </div>
            <div style={{float: 'right', border: '0px none rgb(51, 51, 51)', padding: '0px', width: '150px', display: 'block', textAlign: 'left', borderRight: '0px none rgb(51, 51, 51)', position: 'relative', paddingLeft: '0px', boxSizing: 'border-box'}}>
                <button htmlFor="demo_inputs" type="submit" fdprocessedid="vd15eb" style={{background: 'rgb(106, 124, 147) none repeat scroll 0% 0% / auto padding-box border-box', padding: '0px 0px 1px', position: 'relative', borderRadius: '0px', margin: '0px', height: '55px', width: '150px', display: 'inline-block', marginBottom: '0px', touchAction: 'manipulation', cursor: 'pointer', backgroundImage: 'none', border: '0.8px solid rgba(0, 0, 0, 0)', lineHeight: '18.5714px', userSelect: 'none', whiteSpace: 'nowrap', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, color: 'rgb(255, 255, 255)', marginRight: '0px', boxShadow: 'rgba(50, 50, 93, 0.05) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 1px 3px 0px', fontFamily: 'Promo, Helvetica, Arial, sans-serif', boxSizing: 'border-box', appearance: 'button', overflow: 'visible', verticalAlign: 'middle', textAlign: 'center'}}>Search Flight</button>
            </div>
        </form> */}
        <div style={{display: 'block', width: '100%', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', minHeight: '200px', marginTop: '20px', textAlign: 'left', padding: '0px', borderRadius: '3px', overflow: 'hidden', boxShadow: 'rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px', position: 'relative', boxSizing: 'border-box'}}>

            <div style={{display: 'block', height: '75px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', padding: '0px', boxSizing: 'border-box'}}>

                <div style={{display: 'inline-block', height: '75px', verticalAlign: 'top', paddingTop: '7px', width: '255px', paddingLeft: '14px', boxSizing: 'border-box'}}>
                    <span data-api="flight_number" style={{display: 'block', fontSize: '25px', fontWeight: 600, boxSizing: 'border-box'}}>AI 833</span> <span style={{display: 'inline-block', boxSizing: 'border-box'}}><span data-api="airline_name" style={{boxSizing: 'border-box'}}>Air India</span> (<span data-api="airline_code" style={{boxSizing: 'border-box'}}>AI</span>)</span>
                </div>
                <div style={{display: 'inline-block', height: '75px', verticalAlign: 'top', position: 'relative', paddingTop: '12px', boxSizing: 'border-box'}}>

                    <div style={{display: 'inline-block', width: '175px', textAlign: 'center', boxSizing: 'border-box'}}>
                        <span data-api="origin_code" style={{display: 'block', fontWeight: 700, fontSize: '18px', textAlign: 'center', boxSizing: 'border-box'}}>DEL</span> <span data-api="origin_name" style={{width: '115px', textOverflow: 'ellipsis', display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', boxSizing: 'border-box'}}>Indira Gandhi Int.</span>
                    </div>
                    <div style={{display: 'inline-block', width: '175px', textAlign: 'center', boxSizing: 'border-box'}}>
                        <span data-api="destination_code" style={{display: 'block', fontWeight: 700, fontSize: '18px', textAlign: 'center', boxSizing: 'border-box'}}>COK</span> <span data-api="destination_name" style={{width: '115px', textOverflow: 'ellipsis', display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', boxSizing: 'border-box'}}>Cochin Int.</span>
                    </div>
                </div>
                <div style={{background: 'rgb(47, 189, 79) none repeat scroll 0% 0% / auto padding-box border-box', display: 'block', height: '75px', verticalAlign: 'top', float: 'right', width: '195px', padding: '12px 14px 0px 15px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>

                    <span data-api="status_text" style={{display: 'block', fontSize: '20px', fontWeight: 700, textTransform: 'capitalize', boxSizing: 'border-box'}}>Airborne</span> <span data-api="status_delay" style={{fontSize: '14px', fontWeight: 600, boxSizing: 'border-box'}}>On Time</span>
                </div>
            </div>
            <div style={{display: 'block', width: '100%', textAlign: 'left', position: 'relative', boxSizing: 'border-box'}}>

                <div style={{display: 'inline-block', float: 'none', width: '50%', borderRight: '0.8px solid rgba(0, 0, 0, 0.1)', textAlign: 'center', paddingBottom: '25px', boxSizing: 'border-box'}}>

                    <div style={{marginBottom: '20px', boxSizing: 'border-box'}}>

                        <span style={{display: 'block', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', width: '100px', margin: '20px auto 8px', fontSize: '13px', fontWeight: 600, padding: '5px 5px 6px', borderRadius: '50px', boxSizing: 'border-box'}}>Departure</span> <span data-api="departure_airport" style={{fontSize: '18px', fontWeight: 600, display: 'block', boxSizing: 'border-box'}}>Indira Gandhi International</span> <span data-api="departure_iata" style={{fontSize: '12px', fontWeight: 600, color: 'rgb(119, 119, 119)', boxSizing: 'border-box'}}>IATA: DEL</span> <span style={{fontSize: '8px', color: 'rgb(119, 119, 119)', marginLeft: '4px', marginRight: '4px', position: 'relative', top: '-2px', boxSizing: 'border-box'}}>●</span> <span data-api="departure_icao" style={{fontSize: '12px', fontWeight: 600, color: 'rgb(119, 119, 119)', boxSizing: 'border-box'}}>ICAO: VIDP</span>
                    </div>
                    <div style={{marginBottom: '20px', boxSizing: 'border-box'}}>

                        <div style={{borderRight: '1.6px solid rgba(0, 0, 0, 0.1)', borderBottom: '1.6px solid rgba(0, 0, 0, 0.1)', marginRight: '-10px', zIndex: 1, paddingTop: '10px', borderTopLeftRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 1.6px 1.6px 0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Scheduled</span> <span data-api="scheduled_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-26 23:30:00</span>
                        </div>
                        <div style={{borderBottom: '1.6px solid rgba(0, 0, 0, 0.1)', paddingTop: '10px', borderTopRightRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 0px 1.6px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Estimated</span> <span data-api="estimated_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-26 23:30:00</span>
                        </div>
                        <div style={{borderRight: '1.6px solid rgba(0, 0, 0, 0.1)', marginRight: '-10px', paddingTop: '7px', zIndex: 1, borderBottomLeftRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 1.6px 0px 0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Actual</span> <span data-api="actual_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-26 23:34:00</span>
                        </div>
                        <div style={{paddingTop: '7px', borderBottomRightRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Runway</span> <span data-api="runway_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-26 23:34:00</span>
                        </div>
                    </div>
                    <div style={{display: 'block', width: '255px', margin: '0px auto 15px', fontSize: '14px', fontWeight: 600, boxSizing: 'border-box'}}>

                        <span data-api="departure_terminal" style={{float: 'left', border: '1.6px solid rgb(106, 124, 147)', padding: '0px', width: '125px', borderRadius: '3px', height: '27px', textAlign: 'center', position: 'relative', left: '-12px', boxSizing: 'border-box'}}><i style={{float: 'left', fontStyle: 'normal', width: '51px', paddingTop: '1px', boxSizing: 'border-box'}}>7</i></span> <span data-api="departure_gate" style={{float: 'right', border: '1.6px solid rgb(106, 124, 147)', padding: '0px', borderRadius: '3px', textAlign: 'center', position: 'relative', left: '-9px', boxSizing: 'border-box'}}><i style={{float: 'left', fontStyle: 'normal', width: '51px', paddingTop: '1px', boxSizing: 'border-box'}}>73</i></span>
                    </div>
                </div>
                <div style={{float: 'none', display: 'inline-block', width: '49.5%', height: '200px', textAlign: 'center', boxSizing: 'border-box'}}>

                    <div style={{marginBottom: '20px', boxSizing: 'border-box'}}>

                        <span style={{display: 'block', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', width: '100px', margin: '20px auto 8px', fontSize: '13px', fontWeight: 600, padding: '5px 5px 6px', borderRadius: '50px', boxSizing: 'border-box'}}>Arrival</span> <span data-api="arrival_airport" style={{fontSize: '18px', fontWeight: 600, display: 'block', boxSizing: 'border-box'}}>Cochin International</span> <span data-api="arrival_iata" style={{fontSize: '12px', fontWeight: 600, color: 'rgb(119, 119, 119)', boxSizing: 'border-box'}}>IATA: COK</span> <span style={{fontSize: '8px', color: 'rgb(119, 119, 119)', marginLeft: '4px', marginRight: '4px', position: 'relative', top: '-2px', boxSizing: 'border-box'}}>●</span> <span data-api="arrival_icao" style={{fontSize: '12px', fontWeight: 600, color: 'rgb(119, 119, 119)', boxSizing: 'border-box'}}>ICAO: VOCI</span>
                    </div>
                    <div style={{marginBottom: '20px', boxSizing: 'border-box'}}>

                        <div style={{borderRight: '1.6px solid rgba(0, 0, 0, 0.1)', borderBottom: '1.6px solid rgba(0, 0, 0, 0.1)', marginRight: '-10px', zIndex: 1, paddingTop: '10px', borderTopLeftRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 1.6px 1.6px 0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Scheduled</span> <span data-api="arrival_scheduled_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-27 07:54:00</span>
                        </div>
                        <div style={{borderBottom: '1.6px solid rgba(0, 0, 0, 0.1)', paddingTop: '10px', borderTopRightRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 0px 1.6px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Estimated</span> <span data-api="arrival_estimated_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-27 07:54:00</span>
                        </div>
                        <div style={{borderRight: '1.6px solid rgba(0, 0, 0, 0.1)', marginRight: '-10px', paddingTop: '7px', zIndex: 1, borderBottomLeftRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px 1.6px 0px 0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Actual</span> <span data-api="arrival_actual_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-27 07:54:00</span>
                        </div>
                        <div style={{paddingTop: '7px', borderBottomRightRadius: '0px', display: 'inline-block', width: '160px', paddingBottom: '10px', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '0px', boxSizing: 'border-box'}}>
                            <span style={{display: 'block', fontWeight: 600, marginBottom: '2px', boxSizing: 'border-box'}}>Runway</span> <span data-api="arrival_runway_time" style={{fontSize: '13px', boxSizing: 'border-box'}}>2024-10-27 07:54:00</span>
                        </div>
                    </div>
                    <div style={{display: 'block', width: '255px', margin: '0px auto 15px', fontSize: '14px', fontWeight: 600, boxSizing: 'border-box'}}>

                        <span data-api="arrival_terminal" style={{float: 'left', border: '1.6px solid rgb(106, 124, 147)', padding: '0px', width: '125px', borderRadius: '3px', height: '27px', textAlign: 'center', position: 'relative', left: '-12px', boxSizing: 'border-box'}}><i style={{float: 'left', fontStyle: 'normal', width: '51px', paddingTop: '1px', boxSizing: 'border-box'}}>B</i></span> <span data-api="arrival_gate" style={{float: 'right', border: '1.6px solid rgb(106, 124, 147)', padding: '0px', borderRadius: '3px', textAlign: 'center', position: 'relative', left: '-9px', boxSizing: 'border-box'}}><i style={{float: 'left', fontStyle: 'normal', width: '51px', paddingTop: '1px', boxSizing: 'border-box'}}>B27</i></span>
                    </div>
                    </div>{/* </div> <a href="javascript:void(0)" style={{position: 'absolute', bottom: '0px', zIndex: 1, left: '392px', fontWeight: 600, background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderWidth: '0.8px 0.8px 0px', borderTopStyle: 'solid', borderRightStyle: 'solid', borderLeftStyle: 'solid', borderTopColor: 'rgba(0, 0, 0, 0.1)', borderRightColor: 'rgba(0, 0, 0, 0.1)', borderLeftColor: 'rgba(0, 0, 0, 0.1)', borderImage: 'none', borderBottomStyle: 'none', borderBottomColor: 'rgb(152, 152, 152)', fontSize: '12px', padding: '4px 11px', borderRadius: '0px', color: 'rgb(152, 152, 152)', width: '89px', textAlign: 'center', boxSizing: 'border-box', backgroundColor: 'rgb(255, 255, 255)', textDecoration: 'none solid rgb(152, 152, 152)'}}><span style={{display: 'inline', boxSizing: 'border-box'}}>Show More</span><span style={{display: 'none', boxSizing: 'border-box'}}>Show Less</span></a> */}
            </div>
            <div style={{display: 'none', width: '100%', position: 'relative', borderTop: '0.8px solid rgba(0, 0, 0, 0.1)', padding: '15px 0px 12px 50px', textAlign: 'center', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', boxSizing: 'border-box'}}>

                <div style={{display: 'inline-block', width: '200px', textAlign: 'left', boxSizing: 'border-box'}}>

                    <span style={{display: 'block', width: '120px', fontSize: '13px', fontWeight: 600, padding: '3px 0px 4px', borderRadius: '3px', marginBottom: '12px', textAlign: 'center', border: '0.8px solid rgba(0, 0, 0, 0.1)', background: 'rgb(227, 229, 232) none repeat scroll 0% 0% / auto padding-box border-box', boxSizing: 'border-box'}}>Aircraft Location</span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Latitude:</strong> <span data-api="aircraft_lat" style={{boxSizing: 'border-box'}}>41.7816</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Longitude:</strong> <span data-api="aircraft_lon" style={{boxSizing: 'border-box'}}>-86.1503</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Altitude:</strong> <span data-api="aircraft_alt" style={{boxSizing: 'border-box'}}>8107.680</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Direction:</strong> <span data-api="aircraft_dir" style={{boxSizing: 'border-box'}}>86.530</span></span>
                </div>
                <div style={{display: 'inline-block', width: '200px', verticalAlign: 'top', textAlign: 'left', boxSizing: 'border-box'}}>

                    <span style={{display: 'block', width: '120px', fontSize: '13px', fontWeight: 600, padding: '3px 0px 4px', borderRadius: '3px', marginBottom: '12px', textAlign: 'center', border: '0.8px solid rgba(0, 0, 0, 0.1)', background: 'rgb(227, 229, 232) none repeat scroll 0% 0% / auto padding-box border-box', boxSizing: 'border-box'}}>Aircraft Speed</span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Horizontal:</strong> <span data-api="speed_hor" style={{boxSizing: 'border-box'}}>764.424</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Vertical:</strong> <span data-api="speed_ver" style={{boxSizing: 'border-box'}}>24.588</span></span>
                </div>
                <div style={{display: 'inline-block', verticalAlign: 'top', width: '200px', textAlign: 'left', boxSizing: 'border-box'}}>

                    <span style={{display: 'block', width: '120px', fontSize: '13px', fontWeight: 600, padding: '3px 0px 4px', borderRadius: '3px', marginBottom: '12px', textAlign: 'center', border: '0.8px solid rgba(0, 0, 0, 0.1)', background: 'rgb(227, 229, 232) none repeat scroll 0% 0% / auto padding-box border-box', boxSizing: 'border-box'}}>Aircraft Type</span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Registration:</strong> <span data-api="aircraft_reg" style={{boxSizing: 'border-box'}}>N41135</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>IATA:</strong> <span data-api="aircraft_iata" style={{boxSizing: 'border-box'}}>752</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>ICAO:</strong> <span data-api="aircraft_icao" style={{boxSizing: 'border-box'}}>B752</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>ICAO24:</strong> <span data-api="aircraft_icao24" style={{boxSizing: 'border-box'}}>738092</span></span>
                </div>
                <div style={{display: 'inline-block', verticalAlign: 'top', width: '200px', textAlign: 'left', boxSizing: 'border-box'}}>

                    <span style={{display: 'block', width: '120px', fontSize: '13px', fontWeight: 600, padding: '3px 0px 4px', borderRadius: '3px', marginBottom: '12px', textAlign: 'center', border: '0.8px solid rgba(0, 0, 0, 0.1)', background: 'rgb(227, 229, 232) none repeat scroll 0% 0% / auto padding-box border-box', boxSizing: 'border-box'}}>Airline</span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}><span data-api="airline_name" style={{boxSizing: 'border-box'}}>United Airlines</span></strong></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>IATA:</strong> <span data-api="airline_code" style={{boxSizing: 'border-box'}}>UA</span></span> <span style={{display: 'block', marginBottom: '5px', fontSize: '13px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>ICAO:</strong> <span data-api="airline_icao" style={{boxSizing: 'border-box'}}>UAL</span></span>
                </div>
            </div>
            <div style={{display: 'block', width: '100%', background: 'rgb(235, 237, 241) none repeat scroll 0% 0% / auto padding-box border-box', position: 'relative', borderTop: '0.8px solid rgba(0, 0, 0, 0.1)', height: '30px', color: 'rgba(0, 0, 0, 0.5)', padding: '3px 15px 0px', textAlign: 'left', boxSizing: 'border-box'}}>

                <span style={{fontSize: '12px', position: 'relative', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Departure Timezone:</strong> <span data-api="departure_tz" style={{fontSize: '12px', position: 'relative', boxSizing: 'border-box'}}>India/Delhi</span></span> <span style={{fontSize: '8px', color: 'rgb(119, 119, 119)', marginLeft: '5px', marginRight: '5px', position: 'relative', top: '-2px', boxSizing: 'border-box'}}>●</span> <span style={{fontSize: '12px', position: 'relative', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Arrival Timezone:</strong> <span data-api="arrival_tz" style={{fontSize: '12px', position: 'relative', boxSizing: 'border-box'}}>America/New_York</span></span> <span style={{display: 'none', float: 'right', position: 'relative', top: '3px', fontSize: '12px', boxSizing: 'border-box'}}><strong style={{fontWeight: 600, boxSizing: 'border-box'}}>Data collected at:</strong> <span data-api="timestamp" style={{fontSize: '12px', position: 'relative', boxSizing: 'border-box'}}>1572513146</span></span>
            </div>
        </div>
    </div>
</div>

    </section>
  );
}

export default FlightResults;

