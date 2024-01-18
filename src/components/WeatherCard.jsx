/* eslint-disable react/prop-types */

import { convertUnixTimestampToDate } from "../utils/helper";

const WeatherCard = ({ forecastData }) => {

  return (
    <>
      {forecastData?.daily && forecastData.daily.length > 0 ? (
        <div className="flex gap-4">
          {forecastData.daily.map((dayData, index) => (
            <div key={index} className='border-2 border-transparent hover:border-2 hover:border-sky-400 py-2 min-w-[90px] w-20 flex flex-col justify-center items-center'>
              <h1 className='text-center font-semibold '>
                {convertUnixTimestampToDate(dayData.dt)}
              </h1>
              <span className='flex gap-1'>
                <h3 className="font-semibold">
                  {(dayData?.temp?.max.toFixed(0))}&#176;
                </h3>
                <h3 className="font-semibold text-gray-400">
                  {(dayData?.temp?.min.toFixed(0))}&#176;
                </h3>
              </span>
              <img
                src={
                  dayData?.weather[0]?.main === 'Clear'
                    ? '/assets/sun.svg'
                    : '/assets/clouds.svg'
                }
                alt={dayData?.weather[0]?.description}
                width={40}
                height={40} loading="lazy"
              />
              <h1>{dayData?.weather[0]?.main}</h1>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )



}

export default WeatherCard;



