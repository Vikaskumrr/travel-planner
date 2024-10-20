import React, { useState } from 'react';
import './App.scss';
import LoginForm from './components/login/login-form';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='app-container'>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
        <div className="header">
        <h1>Travel Planner</h1>
        </div>
          <TripForm onAddTrip={addTrip} />
          <TripList trips={trips} />
        </>
      )}
    </div>
  );
}

export default App;