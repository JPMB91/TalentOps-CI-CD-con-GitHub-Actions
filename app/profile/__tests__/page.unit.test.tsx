import { render, screen } from '@testing-library/react';
import ProfilePage from '../page';

describe('ProfilePage - Unit Tests', () => {
  it('renders profile heading', () => {
    render(<ProfilePage />);
    expect(screen.getByText('User Profile')).toBeInTheDocument();
  });

  it('renders profile container', () => {
    render(<ProfilePage />);
    expect(screen.getByText('User profile information:')).toBeInTheDocument();
  });
});
