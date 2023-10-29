import Degree from './Degree';
import { forecastItem } from '../types';

type ForecastItemProps = {
  item: forecastItem;
};

export const ForecastItem = ({ item }: ForecastItemProps) => {
  return (
    <div className="text-center bg-white bg-opacity-50 rounded p-4">
      <p className="text-">
        {new Date(item.dt * 1000).toLocaleTimeString([], {
          weekday: 'long',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </p>
      <div className="flex justify-center">
        <img
          alt={`weather-icon-${item.weather[0].description}`}
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        />
      </div>
      <p className="text-sm font-bold">
        <Degree temp={Math.round(item.main.temp)} />
      </p>
    </div>
  );
};
