import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TripCard from './trip-card';

describe('TripCard', () => {
  const trip = {
    id: 1,
    destination: "Paris",
    attractions: ["Eiffel Tower", "Louvre Museum"],
    foods: ["Croissant", "Macaron"],
    shopping: ["Champs-Élysées"],
    hotel: "Hotel Lutetia"
  };

  const handleDelete = jest.fn();
  const handleEdit = jest.fn();

  it('renders TripCard with trip information', () => {
    render(<TripCard trip={trip} onDelete={handleDelete} onEdit={handleEdit} />);
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Attractions: Eiffel Tower, Louvre Museum')).toBeInTheDocument();
    expect(screen.getByText('Foods: Croissant, Macaron')).toBeInTheDocument();
    expect(screen.getByText('Shopping: Champs-Élysées')).toBeInTheDocument();
    expect(screen.getByText('Hotel: Hotel Lutetia')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TripCard trip={trip} onDelete={handleDelete} onEdit={handleEdit} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(handleDelete).toHaveBeenCalledWith(trip.id);
  });

  it('calls onEdit when edit button is clicked', () => {
    render(<TripCard trip={trip} onDelete={handleDelete} onEdit={handleEdit} />);
    fireEvent.click(screen.getByText('Edit'));
    expect(handleEdit).toHaveBeenCalledWith(trip);
  });
});