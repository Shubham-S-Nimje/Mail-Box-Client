import { render, screen } from '@testing-library/react';
import Signup from '../pages/signup/Signup';

test('renders SignUp text', () => {
  render(<Signup/>);
  const SignUpElement = screen.getByText(/SignUp/i);
  expect(SignUpElement).toBeInTheDocument();
});
