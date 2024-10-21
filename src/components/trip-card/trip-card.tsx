import React from 'react';
import './trip-card.scss';

interface Trip {
  id: number;
  destination: string;
  attractions: string[];
  foods: string[];
  shopping: string[];
  hotel: string;
}

interface Props {
  trip: Trip;
}

const TripCard: React.FC<Props> = ({ trip }) => {
  return (
    <div className='trip-card'>
      <h3>{trip.destination}</h3>
      <p>Attractions: {trip.attractions.join(', ')}</p>
      <p>Foods: {trip.foods.join(', ')}</p>
      <p>Shopping: {trip.shopping.join(', ')}</p>
      <p>Hotel: {trip.hotel}</p>
    </div>
  );
}

export default TripCard;