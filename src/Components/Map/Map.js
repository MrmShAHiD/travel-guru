import React, { useState } from 'react';
import {GoogleMap, Marker, InfoWindow, withScriptjs, withGoogleMap} from 'react-google-maps';
import fakeHotel from '../../fakeData/FakeHotel';

const HotelsMap = () => {
    const [infoBox, setInfoBox] = useState(null);
    return (
        <div>
            <h1></h1>
            <GoogleMap defaultZoom={14} defaultCenter={{lat: 47.444, lng: -122.176}}>
                {
                    fakeHotel.map((hotels) => (
                        <Marker position={{lat: 47.444, lng: -122.176}} onClick={() => hotels}/>
                    ))
                }
                {
                    infoBox && (
                        <InfoWindow>
                            Hotel details
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </div>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(HotelsMap));

const Map = () => {
	return (
		<div>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCr4SS8qEhSxzeKc9jF7ib2gqZpQZlQ6QA`}
				loadingElement={<div style={{ height: '500px' }} />}
				containerElement={<div style={{ height: '500px' }} />}
				mapElement={<div style={{ width: "400px", height: "500px", borderRadius: "13px" }} />}
			/>
		</div>
	);
};

export default Map;