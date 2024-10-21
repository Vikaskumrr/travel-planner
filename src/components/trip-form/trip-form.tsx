import React, { useState, useEffect } from 'react';
import './trip-form.scss';

interface Trip {
  id: number;
  destination: string;
  attractions: string[];
  foods: string[];
  shopping: string[];
  hotel: string;
}

interface Props {
  trip?: Trip;
  onAddTrip: (trip: Trip) => void;
}

const TripForm: React.FC<Props> = ({ onAddTrip, trip }) => {
  const [destination, setDestination] = useState('');
  const [attractions, setAttractions] = useState('');
  const [foods, setFoods] = useState('');
  const [shopping, setShopping] = useState('');
  const [hotel, setHotel] = useState('');

  useEffect(() => {
    if (trip) {
      setDestination(trip.destination);
      setAttractions(trip.attractions.join(', '));
      setFoods(trip.foods.join(', '));
      setShopping(trip.shopping.join(', '));
      setHotel(trip.hotel);
    } else {
      setDestination('');
      setAttractions('');
      setFoods('');
      setShopping('');
      setHotel('');
    }
  }, [trip]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: Trip = {
      id: trip ? trip.id : Date.now(),
      destination,
      attractions: attractions.split(',').map(item => item.trim()),
      foods: foods.split(',').map(item => item.trim()),
      shopping: shopping.split(',').map(item => item.trim()),
      hotel
    };
    onAddTrip(newTrip);
    if (!trip) {
        setDestination('');
        setAttractions('');
        setFoods('');
        setShopping('');
        setHotel('');
    }  };

  return (
    <div className='trip-form'>
        <h2>{trip ? `Editing ${trip.destination}` : 'Add New Trip'}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
            <input type="text" value={attractions} onChange={e => setAttractions(e.target.value)} placeholder="Attractions" />
            <input type="text" value={foods} onChange={e => setFoods(e.target.value)} placeholder="Foods" />
            <input type="text" value={shopping} onChange={e => setShopping(e.target.value)} placeholder="Shopping" />
            <input type="text" value={hotel} onChange={e => setHotel(e.target.value)} placeholder="Hotel" />
            <button type="submit">{trip ? 'Update Trip' : 'Add Trip'}</button>
        </form>
    </div>
  );
}

export default TripForm;