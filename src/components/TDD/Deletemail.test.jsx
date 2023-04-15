import { render, screen } from '@testing-library/react';
import Inboxmaildata from '../pages/inbox/Inboxmaildata';

test('renders Remove text', () => {
  render(<Inboxmaildata/>);
  const RemoveElement = screen.getByText('Remove');
  expect(RemoveElement).toBeInTheDocument();
});
