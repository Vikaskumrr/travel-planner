// src/components/TripList.tsx
import React from 'react';
import './trip-list.scss';
import TripCard from '../trip-card/trip-card';

interface Trip {
  id: number;
  destination: string;
  attractions: string[];
  foods: string[];
  shopping: string[];
  hotel: string;
}

interface Props {
  trips: Trip[];
}

const TripList: React.FC<Props> = ({ trips }) => {
  return (
    <div className="trip-list">
    {trips.map(trip => (
        <div className="trip-item" key={trip.id}>
            <TripCard key={trip.id} trip={trip} />
        </div>
    ))}
    </div>
  );
}

export default TripList;