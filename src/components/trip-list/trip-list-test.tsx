import React from 'react';
import { render } from '@testing-library/react';
import TripList from '../trip-list/trip-list';
import TripCard from '../trip-card/trip-card';

jest.mock('../TripCard', () => {
  return jest.fn(() => <div>TripCard</div>);
});

describe('TripList', () => {
  it('renders multiple TripCard components', () => {
    const trips = [
      { id: 1, destination: 'Paris', attractions: [], foods: [], shopping: [], hotel: '' },
      { id: 2, destination: 'London', attractions: [], foods: [], shopping: [], hotel: '' }
    ];
    render(<TripList trips={trips} />);
    expect(TripCard).toHaveBeenCalledTimes(2);
  });
});