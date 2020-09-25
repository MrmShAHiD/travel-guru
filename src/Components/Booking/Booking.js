import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeDestination from '../../fakeData/FakeDestination';
import './Booking.css';

const Booking = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push("/hotels");
    };
    const {id} = useParams();
    
    const bookingDetails = fakeDestination.find((destination) => destination.id === id);
    console.log(bookingDetails);
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div style={{color: 'white'}}>
                        <h1>Cox's Bazar</h1>
                        <p>Cox's Bazar  is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as yellow flower. Another old name was Palongkee.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div>
                            <div className="labelStyle">
								<label>Origin</label>
								<input type="text" style={{width:'100%'}} placeholder="Type your arrival city"/>
							</div>
							<div className="labelStyle">
								<label>Destination</label>
								<input type="text" style={{width:'100%'}} placeholder="Type your destination city"/>
							</div>
							<div style={{display: 'flex'}} className="labelStyle">
								<div className="col-6">
									<label htmlFor="date-input">From</label>
									<input style={{width:'100%'}} type="date"/>
								</div>
								<div className="col-6">
									<label htmlFor="dateTo">To</label>
									<input style={{width:'100%'}} type="date"/>
								</div>
							</div>
                            <button className="btn btn-warning labelStyle btn-booking" type='submit' onClick={handleLogin}>Start Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;