// Set the API key, city, and units (metric for Celsius)
const API_KEY = "511e0997ceb4fbc22cfb6642a066868a";
const CITY = "Nancy";
const UNITS = "metric";

// Fetch weather data from the OpenWeatherMap API for the specified city and units
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`)
  .then(response => response.json()) // Convert the response to JSON format
  .then(data => {
    // Extract various data from the JSON response
    const temperature = `Température: ${data.main.temp}°C`;
    const humidity = `Humidité: ${data.main.humidity}%`;
    const description = `Conditions météo: ${data.weather[0].description}`;
    const windSpeed = `Vitesse du vent: ${data.wind.speed} m/s`;

    // Combine the data and display it in the "weather-data" HTML element
    const weatherData = `${temperature}<br>${humidity}<br>${description}<br>${windSpeed}`;
    document.getElementById("weather-data").innerHTML = weatherData;
  })
  .catch(error => {
    // Display an alert with the error message
    alert(`Erreur lors de la récupération des données météo`);
  });
