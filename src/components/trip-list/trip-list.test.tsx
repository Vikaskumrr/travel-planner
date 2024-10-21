import React from 'react';
import { render, screen } from '@testing-library/react';
import TripList from './trip-list';

// Mock the TripCard component
jest.mock('../trip-card/trip-card', () => (props: any) => (
  <div onClick={() => {
    props.onDelete(props.trip.id);
    props.onEdit(props.trip);
  }}>
    MockedTripCard {props.trip.destination}
  </div>
));

describe('TripList', () => {
  const trips = [
    { id: 1, destination: "Paris", attractions: [], foods: [], shopping: [], hotel: "" },
    { id: 2, destination: "New York", attractions: [], foods: [], shopping: [], hotel: "" }
  ];

  it('renders TripList with multiple trips', () => {
    const handleDelete = jest.fn();
    const handleEdit = jest.fn();
    render(<TripList trips={trips} onDelete={handleDelete} onEdit={handleEdit} />);
    
    trips.forEach(trip => {
      expect(screen.getByText(`MockedTripCard ${trip.destination}`)).toBeInTheDocument();
    });

    screen.getAllByText('MockedTripCard Paris')[0].click();
    expect(handleDelete).toHaveBeenCalledWith(1);
    expect(handleEdit).toHaveBeenCalledWith(trips[0]);
  });
});