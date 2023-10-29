import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render the title correctly', () => {
    const { getByText } = render(<Header />);

    const titleElement = getByText('Weather Forecast');
    expect(titleElement).toBeInTheDocument();
  });
});
