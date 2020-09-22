import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    console.log(props.destination);
    const {name, photo, shortDescription, id} = props.destination;
    return (
        <div className="col-md-4">
            <Link to={`/booking/${id}`}>
                <div className="hero-text">
                    <img src={photo} alt={name} style={{maxWidth:'100%'}} className="image-style"/>
                    <h2 style={{color:'white'}}>{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Destination;