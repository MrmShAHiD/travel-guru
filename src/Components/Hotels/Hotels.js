import React from 'react';

const Hotels = (props) => {
    const {id, name, guest, category, details, cancelation, bedrooms, beds, baths, rating, totalRating, price, photo} = props.hotels;
    return (
        <div style={{display:'flex'}}>
            <div className="img">
                <img style={{height:'100px'}} src={photo} alt=""/>
            </div>
            <div>
                <h5>{name}</h5>
                <p>
                    <small>
                        {guest} guests, {bedrooms} rooms, {beds} beds,{baths} bathrooms
                    </small>
                </p>
                <p><small>{details}</small></p>
                <p><small>{cancelation}</small></p>
                <p>
                    <small>
                        <strong>{rating}({totalRating})</strong>
                    </small>
                    <strong>              ${price}</strong>
                </p>
            </div>
        </div>
    );
};

export default Hotels;