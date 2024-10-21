import React, { useState } from 'react';
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
  onAddTrip: (trip: Trip) => void;
}

const TripForm: React.FC<Props> = ({ onAddTrip }) => {
  const [destination, setDestination] = useState('');
  const [attractions, setAttractions] = useState('');
  const [foods, setFoods] = useState('');
  const [shopping, setShopping] = useState('');
  const [hotel, setHotel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTrip({
      id: Date.now(),
      destination,
      attractions: attractions.split(',').map(item => item.trim()),
      foods: foods.split(',').map(item => item.trim()),
      shopping: shopping.split(',').map(item => item.trim()),
      hotel
    });
    setDestination('');
    setAttractions('');
    setFoods('');
    setShopping('');
    setHotel('');
  };

  return (
    <div className='trip-form'>
        <form onSubmit={handleSubmit}>
        <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
        <input type="text" value={attractions} onChange={e => setAttractions(e.target.value)} placeholder="Attractions" />
        <input type="text" value={foods} onChange={e => setFoods(e.target.value)} placeholder="Foods" />
        <input type="text" value={shopping} onChange={e => setShopping(e.target.value)} placeholder="Shopping" />
        <input type="text" value={hotel} onChange={e => setHotel(e.target.value)} placeholder="Hotel" />
        <button type="submit">Add Trip</button>
        </form>
    </div>
  );
}

export default TripForm;