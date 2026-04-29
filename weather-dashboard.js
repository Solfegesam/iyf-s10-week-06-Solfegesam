const API_KEY = "YOUR_API_KEY"; // 🔴 PUT YOUR KEY HERE
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM elements
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");

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
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) throw new Error("City not found");
        throw new Error("Failed to fetch weather");
    }

    return response.json();
}

// ================= CONTROLLER =================
async function handleSearch(city) {
    try {
        showLoading();
        hideError();

        const data = await fetchWeather(city);
        updateUI(data);
        saveHistory(city);

    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

// ================= UI =================
function updateUI(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `${data.main.temp}°C`;
    desc.textContent = data.weather[0].description;

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    feelsLike.textContent = `${data.main.feels_like}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

// ================= STATES =================
function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = message;
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

// ================= EVENTS =================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = input.value.trim();
    if (!city) return;

    handleSearch(city);
});

// Initialize
renderHistory();
