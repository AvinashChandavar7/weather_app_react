import axios from 'axios';

export const fetchWeather = async ({ CITY_NAME }) => {

  const API_KEY = import.meta.env.VITE_WEATHER_API_URL;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};


export const fetchDaily = async ({ lon, lat }) => {


  const API_KEY = import.meta.env.VITE_DAILY_API_URL;
  const URL = `
https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutelyalerts&units=metric&appid=${API_KEY}`

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};



