import { render, screen } from '@testing-library/react';
import Sentmails from '../pages/sentmail/Sentmail';

test('renders Sent Mails text', () => {
  render(<Sentmails/>);
  const SentMailsElement = screen.getByText('Sent Mails');
  expect(SentMailsElement).toBeInTheDocument();
});
