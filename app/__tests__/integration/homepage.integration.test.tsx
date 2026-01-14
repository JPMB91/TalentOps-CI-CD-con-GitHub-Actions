import { render, screen } from '@testing-library/react';
import Home from '../../page';

describe('Homepage - Integration Tests', () => {
  it('renders homepage content', () => {
    render(<Home />);
    expect(screen.getByText(/information:/i)).toBeInTheDocument();
  });
});