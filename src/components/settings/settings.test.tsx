import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Settings from './settings';

describe('Settings Component', () => {
  const mockLogout = jest.fn();
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    mockLogout.mockClear();
    mockToggleTheme.mockClear();
  });

  it('renders settings with buttons', () => {
    render(<Settings onLogout={mockLogout} toggleTheme={mockToggleTheme} />);
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls onLogout when logout button is clicked', () => {
    render(<Settings onLogout={mockLogout} toggleTheme={mockToggleTheme} />);
    fireEvent.click(screen.getByText('Logout'));
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('calls toggleTheme when theme toggle button is clicked', () => {
    render(<Settings onLogout={mockLogout} toggleTheme={mockToggleTheme} />);
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});