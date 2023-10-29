import Degree from './Degree';

import { forecastType } from '../types';
import { ForecastItem } from './ForecastItem';

type ForecastProps = {
  data: forecastType;
};

const WeatherForecast = ({ data }: ForecastProps) => {
  const { main, weather } = data.list[0];
  return (
    <div className="mx-auto md:w-[800px] sm:w-[500px] xs:w-[200px] text-center">
      <section className="text-center">
        <h2 className="text-4xl font-black text-white">
          {data.name}, {data.country}
        </h2>
        <h1 className="text-6xl font-extrabold p-2 text-white">
          <Degree temp={Math.round(main.temp)} />
        </h1>
        <p className="text-xl text-white">
          {weather[0].main} ({weather[0].description})
        </p>
        <p className="text-md text-white p-2">
          <span className="p-2">
            <span className="font-black">H:</span>{' '}
            <Degree temp={Math.ceil(main.temp_max)} />
          </span>
          <span className="p-2">
            <span className="font-black">L:</span>{' '}
            <Degree temp={Math.floor(main.temp_min)} />
          </span>
        </p>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 pb-2 mb-5">
        {data.list.map((item, index) => (
          <ForecastItem key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default WeatherForecast;
