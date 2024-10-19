// src/App.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main application components', () => {
    const { getByText } = render(<App />);
    expect(getByText('Travel Planner')).toBeInTheDocument();
    expect(getByText('Add Trip')).toBeInTheDocument(); // Assuming 'Add Trip' is a button in TripForm
  });
});