import { render, screen } from '@testing-library/react';
import Inboxmails from '../pages/inbox/Inboxmail';

test('renders Inbox text', () => {
  render(<Inboxmails/>);
  const InboxElement = screen.getByText('Inbox');
  expect(InboxElement).toBeInTheDocument();
});
