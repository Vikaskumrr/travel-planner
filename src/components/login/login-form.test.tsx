import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './login-form';

describe('LoginForm', () => {
  test('renders LoginForm component', () => {
    render(<LoginForm onLoginSuccess={() => {}} />);
    expect(screen.getByLabelText(/username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('allows the user to enter username and password', () => {
    render(<LoginForm onLoginSuccess={() => {}} />);
    const usernameInput = screen.getByLabelText(/username:/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password:/i) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(usernameInput.value).toBe('admin');
    expect(passwordInput.value).toBe('password');
  });

  test('displays error on wrong credentials', () => {
    render(<LoginForm onLoginSuccess={() => {}} />);
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'creds' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });

  test('calls onLoginSuccess on correct credentials', () => {
    const handleLoginSuccess = jest.fn();
    render(<LoginForm onLoginSuccess={handleLoginSuccess} />);
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(handleLoginSuccess).toHaveBeenCalledTimes(1);
  });
});