import React from 'react';
import './card.css';
import Pin from '../../img/pin.png';
const Card = (props) => {
  return (
    <>
      <div className='card'>
        <div className='card--left'>
          <img
            src={props.info.imageUrl}
            alt='location'
            className='card--image'
          />
        </div>
        <div className='card--right'>
          <div className='locationInfo'>
            <img src={Pin} alt='pin' className='card--pin' />
            <span className='card--location'>{props.info.location}</span>
            <span className='card--view'>
              <a
                href={props.info.googleMapsUrl}
                className='mapLink'
                target='_blank'
                rel='noreferrer'
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h2 className='card--title'>{props.info.title}</h2>
          <p className='card--time'>
            {props.info.startDate} - {props.info.endDate}
          </p>
          <p className='card--description'>{props.info.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
