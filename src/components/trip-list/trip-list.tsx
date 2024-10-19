// src/components/TripList.tsx
import React from 'react';
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
    <div>
      {trips.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default TripList;