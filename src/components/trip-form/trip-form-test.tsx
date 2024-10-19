// src/components/__tests__/TripForm.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TripForm from '../trip-form/trip-form';

describe('TripForm', () => {
  it('allows entering data and submitting a form', () => {
    const handleAddTrip = jest.fn();
    render(<TripForm onAddTrip={handleAddTrip} />);

    fireEvent.change(screen.getByPlaceholderText(/destination/i), {
      target: { value: 'Paris' },
    });
    fireEvent.change(screen.getByPlaceholderText(/attractions/i), {
      target: { value: 'Eiffel Tower' },
    });
    fireEvent.change(screen.getByPlaceholderText(/foods/i), {
      target: { value: 'Croissant' },
    });
    fireEvent.change(screen.getByPlaceholderText(/shopping/i), {
      target: { value: 'Fashion Boutiques' },
    });
    fireEvent.change(screen.getByPlaceholderText(/hotel/i), {
      target: { value: 'Hotel Paris' },
    });

    fireEvent.click(screen.getByText(/add trip/i));

    expect(handleAddTrip).toHaveBeenCalledWith({
      id: expect.any(Number),
      destination: 'Paris',
      attractions: ['Eiffel Tower'],
      foods: ['Croissant'],
      shopping: ['Fashion Boutiques'],
      hotel: 'Hotel Paris',
    });
  });
});