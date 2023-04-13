import { render, screen } from '@testing-library/react';
import Signin from '../pages/signin/Signin';

test('renders SignIn text', () => {
  render(<Signin/>);
  const SignUpElement = screen.getByText('SignIn');
  expect(SignUpElement).toBeInTheDocument();
});
