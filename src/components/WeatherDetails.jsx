/* eslint-disable react/prop-types */

import { convertKelvinToCelsius, formatUnixTimestampToTime, weatherProperties } from "../utils/helper";
import MyLineChart from "./MyLineChart";

const WeatherDetails = ({ foreData, forecastData }) => {
  const temp = foreData?.main?.temp;

  return (
    foreData?.main && (
      <div className="h-full m-5">
        <div className="flex gap-4">
          <h1 className="font-bold text-4xl">
            {temp ? `${convertKelvinToCelsius(temp).toFixed(2)}°C` : "N/A"}
          </h1>

          <img
            src={
              foreData?.weather[0]?.main === 'Clear'
                ? '/assets/sun.svg'
                : '/assets/clouds.svg'
            }
            alt="Weather Icon" width={40} height={40}
            loading="lazy"
          />

        </div>

        <div className="w-full flex items-center justify-center  -mt-14 z-10">
          <MyLineChart forecastData={forecastData} />
        </div>


        <div className="flex flex-row justify-between items-center">
          {weatherProperties.map(({ key, unit }) => (
            <div key={key} className="bg-blue-50 px-5 py-2 rounded-md flex-1 m-2">
              <h1 className="font-bold text-2xl capitalize">
                {key}
              </h1>

              <p className="font-semibold text-sm">
                {
                  foreData.main[key] !== undefined
                    ? `${foreData.main[key]} ${unit}`
                    : "N/A"
                }
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full min-h-36 bg-white mt-2">
          <div className="flex items-center justify-between z-10 text-black p-5">
            <span>
              <h1 className="font-bold">Sunrise</h1>
              <h1>{foreData.sys.sunrise ? formatUnixTimestampToTime(foreData.sys.sunrise) : "N/A"}</h1>
            </span>
            <span>
              <h1 className="font-bold">Sunset</h1>
              <h1>{foreData.sys.sunset ? formatUnixTimestampToTime(foreData.sys.sunset) : "N/A"}</h1>
            </span>
          </div>
          <img src="/assets/time.png" alt="Day_Cycle" className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    )
  );
};

export default WeatherDetails;