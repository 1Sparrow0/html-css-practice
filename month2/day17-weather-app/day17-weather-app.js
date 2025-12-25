const API_KEY = "01bf144429d2177eeca6986b02242bbc";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const loading = document.getElementById("loading");
const currentWeather = document.getElementById("current-weather");
const forecastDiv = document.getElementById("forecast");
const errorMessage = document.getElementById("error-message");

const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const tempMin = document.getElementById("temp-min");
const tempMax = document.getElementById("temp-max");
const weatherIcon = document.getElementById("weather-icon");

//Loading last searched city from localStorage
function loadLastCity() {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    getWeather(lastCity);
  }
}

//Showing Loading Spinner
function showLoading() {
  loading.classList.remove("hidden");
  currentWeather.classList.add("hidden");
  forecastDiv.classList.add("hidden");
  errorMessage.classList.add("hidden");
}

async function getWeather(city) {
  showLoading();
  try {
    const weatherRes = await fetch(
      `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );
    const forecastRes = await fetch(
      `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );

    if (!weatherRes.ok || !forecastRes.ok) {
      throw new Error("City Not Found!");
    }

    const data = await weatherRes.json();
    const forecastData = await forecastRes.json();

    displayCurrentWeather(data);
    displayForecast(forecastData);

    localStorage.setItem("lastCity", city);
  } catch (err) {
    errorMessage.textContent = err.message;
    errorMessage.classList.remove("hidden");
    loading.classList.add("hidden");
  }
}

// Display Current Weather

function displayCurrentWeather(data) {
  cityName.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  humidity.textContent = data.main.humidity;
  wind.textContent = data.wind.speed;
  tempMin.textContent = `${Math.round(data.main.temp_min)}°C`;
  tempMax.textContent = `${Math.round(data.main.temp_max)}°C`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  currentWeather.classList.remove("hidden");
  loading.classList.add("hidden");
}

// 5 day Forecasts

function displayForecast(data) {
  forecastDiv.innerHTML = "";

  const daily = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

  daily.slice(0, 5).forEach((day) => {
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const card = document.createElement("div");
    card.className = "bg-white/10 backdrop-blur rounded-lg p-4 text-center";
    card.innerHTML = `
    <p class="font-bold">${dayName}</p>
      <img src="https://openweathermap.org/img/wn/${
        day.weather[0].icon
      }@2x.png" class="mx-auto w-16">
      <p class="text-2xl font-bold">${Math.round(day.main.temp)}°</p>
      <p class="text-sm capitalize">${day.weather[0].description}</p>
    `;
    forecastDiv.appendChild(card);
  });

  forecastDiv.classList.remove("hidden");
}

// Current Location Weather

function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        await getWeatherByCoords(lat, lon);
      },
      () => {
        errorMessage.textContent = "Unable to retrieve your location.";
        errorMessage.classList.remove("hidden");
      }
    );
  }
}

async function getWeatherByCoords(lat, lon) {
  showLoading();
  const res = await fetch(
    `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`
  );
  const data = await res.json();
  cityInput.value = data.name;
  getWeather(data.name);
}

// Event Listeners

searchBtn.addEventListener("click", () => {
  getWeather(cityInput.value.trim());
});

cityInput.addEventListener(
  "keypress",
  (e) => e.key === "Enter" && getWeather(cityInput.value.trim())
);
locationBtn.addEventListener("click", getLocationWeather);

// Start
loadLastCity();
