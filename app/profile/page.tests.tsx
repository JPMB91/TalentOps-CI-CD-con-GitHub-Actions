import { render, screen } from '@testing-library/react';
import ProfilePage from './page';

describe('ProfilePage', () => {
  it('renders profile heading', () => {
    render(<ProfilePage />);
    expect(screen.getByText('User Profile')).toBeInTheDocument();
  });
});