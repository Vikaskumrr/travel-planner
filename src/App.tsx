import React, { useState } from 'react';
import TripForm from './components/trip-form/trip-form';
import TripList from './components/trip-list/trip-list';

interface Trip {
  id: number;
  destination: string;
  attractions: string[];
  foods: string[];
  shopping: string[];
  hotel: string;
}

const App: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <TripForm onAddTrip={addTrip} />
      <TripList trips={trips} />
    </div>
  );
}

export default App;