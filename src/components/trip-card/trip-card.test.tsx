import React from 'react';
import { render } from '@testing-library/react';
import TripCard from './trip-card';

describe('TripCard', () => {
  it('displays trip details', () => {
    const trip = {
      id: 1,
      destination: 'Paris',
      attractions: ['Eiffel Tower'],
      foods: ['Croissant'],
      shopping: ['Fashion Boutiques'],
      hotel: 'Hotel Paris'
    };
    const { getByText } = render(<TripCard trip={trip} />);

    expect(getByText('Paris')).toBeInTheDocument();
    expect(getByText(/eiffel tower/i)).toBeInTheDocument();
    expect(getByText(/croissant/i)).toBeInTheDocument();
    expect(getByText(/fashion boutiques/i)).toBeInTheDocument();
    expect(getByText(/Hotel Paris/i)).toBeInTheDocument();
  });
});