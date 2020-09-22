import React from 'react';
import './Home.css';
import { useState } from 'react';
import fakeDestination from '../../fakeData/FakeDestination';
import Destination from '../Destination/Destination';
import { useHistory } from 'react-router-dom';


const Home = () => {
	const history = useHistory();
	const destination = fakeDestination.slice(0,3);
	const handleBookingRoute = () => {
		history.push(`/booking/${destination[0].id}`);
	};
    return (
        <main className="d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="mb-md-0 mb-5">
							<h1 style={{color: 'white'}}>Cox's bazar</h1>
							<p style={{color: 'white'}}>
								Cox's Bazar  is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.
							</p>
							<button className="btn btn-warning" onClick={handleBookingRoute}>Booking</button>
						</div>
					</div>
					<div className="col-md-7">
						<div>
							<div className="row">
                                {
                                    destination.map((destination) => (
									    <Destination destination={destination} key={destination.id}></Destination>
								    ))
                                }
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    );
};

export default Home;