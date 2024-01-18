import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar"
import WeatherDetails from "../../components/WeatherDetails";
import { fetchDaily, fetchWeather } from "../../api/fetchWeatherData";
import WeatherCard from "../../components/WeatherCard";
import Loading from "../../components/Loading/Loading";


const Home = () => {

  const [location, setLocation] = useState("");
  const [foreData, setForeData] = useState({});
  const [forecastData, setForecastData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {

    if (!location) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const weatherData = await fetchWeather({ CITY_NAME: location });
        setForeData(weatherData);

        const { lon, lat } = weatherData.coord;
        const dailyData = await fetchDaily({ lon, lat });
        setForecastData(dailyData);


      } catch (error) {
        setError('Error fetching weather data');
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [location]);


  const handleSearch = (input) => setLocation(input);


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" w-[425px] h-[95%] bg-white  rounded-[25px]  border-4 border-blue-200 overflow-y-scroll ">

        <div className="mx-5 my-2 sticky top-2 z-99 bg-white">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading ? (
          <div className="flex w-full h-[90%] items-center justify-center">
            <Loading />
          </div>
        ) : error ? (
          <div className=" flex  text-2xl items-center justify-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="mx-5 my-1 overflow-x-scroll border rounded-md">
              <WeatherCard forecastData={forecastData} />
            </div>

            <div className="mx-5 my-1 border rounded-md shadow-lg">
              <WeatherDetails foreData={foreData} forecastData={forecastData} />
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Home;
