import React, { useState , useEffect} from 'react';
import './App.scss';
import LoginForm from './components/login/login-form';
import TripForm from './components/trip-form/trip-form';
import TripList from './components/trip-list/trip-list';
import Settings from './components/settings/settings';

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
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    // Check login state from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    const savedTheme = localStorage.getItem('theme') || 'day';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');  // Set login state in localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');  // Clear login state from localStorage
  };

  const renderAnimatedTitle = (title: string) => {
    return title.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
    ));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className='app-container'>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <h1 className="animated-title">{renderAnimatedTitle("Travel Planner")}</h1>
          <TripForm onAddTrip={addTrip} />
          <TripList trips={trips} />
          <Settings onLogout={handleLogout} toggleTheme={toggleTheme} />
        </>
      )}
    </div>
  );
}

export default App;