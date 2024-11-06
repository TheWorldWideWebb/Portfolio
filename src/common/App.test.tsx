import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tom Webb/i);
  expect(linkElement).toBeInTheDocument();
});
