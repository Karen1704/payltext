import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const { unmount } = render(<App />);
  unmount();
});

test('renders button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('updates state on button click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  // Assuming that clicking the button changes some text on the screen
  const updatedElement = screen.getByText(/updated text/i);
  expect(updatedElement).toBeInTheDocument();
});
