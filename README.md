# Weather App

The Weather App is a React-based web application that allows users to get real-time weather information for any location. It fetches data from the OpenWeatherMap API and provides an intuitive interface for users to search and view current weather conditions and forecasts.

## How to Use

- Open the application in your browser.
- Enter the desired location in the search bar.
- Explore current weather details and the daily forecast.

## Tech Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data API.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.

##

![Screenshot](/public/Screenshot.png)

## Getting Started

To run the Weather App locally, follow these steps:

1. Clone the repository:

   ```js
   git clone [repository-url]
   ```

2. Install dependencies:

   ```js
   npm install
   ```

3. Set up API keys:

   - Create an account on [OpenWeatherMap](https://openweathermap.org/) to obtain API keys.
   - Create a `.env` file in the root directory and add the following:

```js
VITE_WEATHER_API_URL = '';
VITE_DAILY_API_URL = '';
```

4. Run the app:

```js
  npm run dev
```
