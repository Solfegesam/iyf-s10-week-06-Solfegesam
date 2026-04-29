const API_KEY = "851e24f506b43fd88e46b47707241412";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

let currentUnit = "metric";
let lastCity = "";

// DOM
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const toggleBtn = document.getElementById("unit-toggle");

const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");

const cityName = document.getElementById("city-name");
const icon = document.getElementById("weather-icon");
const temp = document.getElementById("temperature");
const desc = document.getElementById("description");

const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

const historyList = document.getElementById("history-list");

// ================= API =================
async function fetchWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${currentUnit}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch weather");
        }

        return data;

    } catch (error) {
        throw new Error("Network error. Check connection.");
    }
}

// ================= CONTROLLER =================
async function handleSearch(city) {
    try {
        showLoading();
        hideError();

        const data = await fetchWeather(city);
        lastCity = city;

        updateUI(data);
        updateBackground(data.weather[0].main);
        saveHistory(city);

    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

// ================= UI =================
function updateUI(data) {
    const unit = currentUnit === "metric" ? "°C" : "°F";
    const windUnit = currentUnit === "metric" ? "m/s" : "mph";

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `${data.main.temp}${unit}`;
    desc.textContent = data.weather[0].description;

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    feelsLike.textContent = `${data.main.feels_like}${unit}`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} ${windUnit}`;
    pressure.textContent = `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

// ================= BACKGROUND =================
function updateBackground(condition) {
    const c = condition.toLowerCase();

    if (c.includes("clear")) document.body.style.background = "#fbbf24";
    else if (c.includes("cloud")) document.body.style.background = "#94a3b8";
    else if (c.includes("rain")) document.body.style.background = "#334155";
    else document.body.style.background = "#0f172a";
}

// ================= STATES =================
function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(msg) {
    errorDiv.textContent = msg;
    errorDiv.classList.remove("hidden");
}

function hideError() {
    errorDiv.classList.add("hidden");
}

// ================= HISTORY =================
function saveHistory(city) {
    let history = JSON.parse(localStorage.getItem("history")) || [];

    if (!history.includes(city)) {
        history.unshift(city);
    }

    history = history.slice(0, 5);
    localStorage.setItem("history", JSON.stringify(history));

    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    historyList.innerHTML = history.map(city =>
        `<li onclick="handleSearch('${city}')">${city}</li>`
    ).join("");
}

// ================= TOGGLE =================
toggleBtn.addEventListener("click", () => {
    currentUnit = currentUnit === "metric" ? "imperial" : "metric";

    toggleBtn.textContent =
        currentUnit === "metric" ? "Switch to °F" : "Switch to °C";

    if (lastCity) handleSearch(lastCity);
});

// ================= EVENTS =================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = input.value.trim();
    if (!city) {
        showError("Please enter a city");
        return;
    }

    handleSearch(city);
});

// INIT
renderHistory();
