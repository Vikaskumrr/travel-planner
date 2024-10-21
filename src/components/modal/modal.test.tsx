import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './modal';

describe('Modal', () => {
  test('renders children and can be closed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Test Content</div>
      </Modal>
    );

    // Check that the modal renders with content
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Simulate clicking on the overlay to close the modal
    fireEvent.click(screen.getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not render when isOpen is false', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={false} onClose={handleClose}>
        <div>Test Content</div>
      </Modal>
    );

    // Check that the modal does not render
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });
});