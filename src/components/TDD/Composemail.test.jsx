import { render, screen } from '@testing-library/react';
import Composemail from '../pages/composemail/Composemail';

test('renders Compose Mail text', () => {
  render(<Composemail/>);
  const SignUpElement = screen.getByText('Compose Mail');
  expect(SignUpElement).toBeInTheDocument();
});
