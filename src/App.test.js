import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wedding gallery headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /matthew wedding gallery/i });
  expect(heading).toBeInTheDocument();
});
