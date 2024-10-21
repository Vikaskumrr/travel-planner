import React, { useState , useEffect} from 'react';
import './App.scss';
import LoginForm from './components/login/login-form';
import TripForm from './components/trip-form/trip-form';
import TripList from './components/trip-list/trip-list';
import Settings from './components/settings/settings';
import Modal from './components/modal/modal';  // Import the Modal component

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
  const [editingTrip, setEditingTrip] = useState<Trip | undefined>(undefined);

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

  const deleteTrip = (id: number) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };


  // Other state and functions remain unchanged

  const editTrip = (trip: Trip) => {
    setEditingTrip(trip);  // Set the trip to be edited
  };

  const handleUpdateTrip = (updatedTrip: Trip) => {
    setTrips(trips.map(trip => trip.id === updatedTrip.id ? updatedTrip : trip));
    setEditingTrip(undefined);  // Close modal after updating
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
          <TripList trips={trips} onDelete={deleteTrip} onEdit={editTrip} />
          <Settings onLogout={handleLogout} toggleTheme={toggleTheme} />
          <Modal isOpen={!!editingTrip} onClose={() => setEditingTrip(undefined)}>
            <TripForm trip={editingTrip} onAddTrip={handleUpdateTrip} />  {/* Reuse TripForm for editing */}
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;