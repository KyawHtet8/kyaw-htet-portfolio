import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /engineering reliable systems that ship/i })).toBeInTheDocument();
  expect(screen.getByText(/aws static portfolio deployment/i)).toBeInTheDocument();
});
