import React from 'react';
import fakeHotel from '../../fakeData/FakeHotel';
import Hotels from '../Hotels/Hotels';
import './HotelInfo.css';
import Map from '../Map/Map';

const HotelInfo = () => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    return (
        <div className="container hotels">
            <div style={{padding:'10px'}}>
                <h4>252 stays Apr 13-17 3 guests</h4>
                <h5>Stay in Cox's Bazar</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div>
                        {fakeHotel.map((hotels) => (
                            <Hotels hotels={hotels}></Hotels>
                        ))}
                    </div>
                </div>
                <div className="col-md-5">
                    <Map/>
                </div>
            </div>
        </div>
    );
};

export default HotelInfo;
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCr4SS8qEhSxzeKc9jF7ib2gqZpQZlQ6QA'
//   })(MapContainer);

