import { render, screen } from '@testing-library/react';
import { ForecastItem } from './ForecastItem';
import { forecastItem } from '../test/fixtures/forecastItem';

describe('ForecastItem', () => {
  describe('renders the ForecastItem component', () => {
    beforeEach(() => {
      render(<ForecastItem item={forecastItem} />);
    });

    it('should renders the time correctly', () => {
      const timeElement = screen.getByText(
        /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/,
      );
      expect(timeElement).toBeInTheDocument();
    });

    it('should renders the weather icon', () => {
      const weatherIcon = screen.getByAltText(/weather-icon-cloud/);
      expect(weatherIcon).toBeInTheDocument();
    });

    it('should renders the correct temperature', () => {
      const temperatureElement = screen.getByText('25');
      expect(temperatureElement).toBeInTheDocument();
    });
  });
});
