import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the main application components after login', () => {
    render(<App />);
    // Simulate login
    const usernameInput = screen.getByLabelText(/username:/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password:/i) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Check if "Travel Planner" is rendered after login
    expect(screen.getByText(/Travel Planner/i)).toBeInTheDocument();
  });
});