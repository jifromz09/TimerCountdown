import { render, screen } from '@testing-library/react';
import App from './App';

test('renders countdown timer app', () => {
  render(<App />);
  const heading = screen.getByText(/Countdown App/i);
  expect(heading).toBeInTheDocument();
});
