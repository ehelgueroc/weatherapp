import { render, screen } from '@testing-library/react';
import Degree from './Degree';

describe('Degree component', () => {
  const temperature = 25;
  render(<Degree temp={temperature} />);

  it('should display temperature correctly', () => {
    const temperatureElement = screen.getByText(`${temperature}°`);
    expect(temperatureElement).toBeInTheDocument();
  });
});
