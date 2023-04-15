import { render, screen } from '@testing-library/react';
import Viewmail from '../pages/Home/Viewmail';

test('renders View Mail text', () => {
  render(<Viewmail/>);
  const viewElement = screen.getByText('View Mail');
  expect(viewElement).toBeInTheDocument();
});
