import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the main application components after login', () => {
    render(<App />);
    // Assuming login is simulated and the user is considered logged in

    const travelPlannerText = screen.getByText((content, node) => {
      const hasText = (node: Element | null) => node?.textContent === "Travel Planner";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node?.children || []).every(child => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    });

    expect(travelPlannerText).toBeInTheDocument();
  });
});