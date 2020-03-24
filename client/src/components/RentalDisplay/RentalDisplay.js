import React from 'react';
import './RentalDisplay.scss';

const Rental = (props) =>{
    let furniture = " ";
    if(props.furnished==='yes'){
        furniture = "furnished";
    }

    let beds = "beds";
    if(props.beds <2){
        beds ="bed";
    }
    let bathrooms = "bathrooms";
    if(props.bathrooms < 2){
        bathrooms = "bathroom";
    }

    return(
        <div className='rental'>
            <img  className="rental__img" src = {props.img} />
            <div className="rental__desc-cont">
                <h3 className="rental__title"> {props.beds} {beds} - {props.bathrooms} {bathrooms} {furniture} {props.type} </h3>
                <p className="rental__adress"> Located at {props.adress} </p>
                <h2 className="rental__price"> Price: {props.price} $ </h2>
                <p className="rental__description">  {props.description} </p>
                <a href= {"mailto:" + props.contact} className="rental__contact" type = 'email'> CONTACT </a>
                
            </div>

        </div>
    )
}

export default Rental;