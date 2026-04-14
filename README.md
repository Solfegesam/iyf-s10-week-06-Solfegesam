
# Week 6: Asynchronous JavaScript (Season 10)

## 📌 Overview
This repository contains my Week 6 tasks for the IYF Weekend Academy (Season 10), focused on mastering Asynchronous JavaScript and working with real-world APIs.

The work includes structured exercises, API integration practice, and a final Weather Dashboard project.

---

## 🎯 Learning Objectives
By completing this week, I developed the ability to:
- Understand synchronous vs asynchronous JavaScript execution
- Use callbacks and identify callback hell problems
- Create and manage Promises
- Chain asynchronous operations
- Use async/await for cleaner code
- Fetch and process data from external APIs
- Handle errors and loading states in applications
- Build a functional web application using real API data

---

## 📁 Project Structure

```

iyf-s10-week-06-Solfegesam/
│
├── lesson-11/
│   ├── async-basics.js
│   ├── callbacks.js
│   ├── promises.js
│   ├── promise-chaining.js
│   └── async-await.js
│
├── lesson-12/
│   ├── fetch-basics.js
│   ├── async-fetch.js
│   ├── post-request.js
│   │
│   ├── dom-display/
│   │   ├── dom-display.html
│   │   ├── dom-display.css
│   │   └── dom-display.js
│   │
│   └── search-filter/
│       ├── search-filter.html
│       ├── search-filter.css
│       └── search-filter.js
│
├── challenges/
│   ├── day1-delay.js
│   ├── day2-chain.js
│   ├── day3-error-handling.js
│   ├── day4-async-rewrite.js
│   └── day5-parallel-fetch.js
│
└── weather-dashboard/
    ├── weather-dashboard.html
    ├── weather-dashboard.css
    ├── weather-dashboard.js
    └── README.md

```

```id="wk6struct"
```
---

## 🌦️ Weather Dashboard Project

### 📌 Description
A responsive weather application built using JavaScript and the OpenWeatherMap API. It fetches real-time weather data based on user input.

---

### ⚙️ Features
- Search weather by city name
- Displays:
  - Temperature (°C)
  - Weather description
  - Weather icon
  - Feels-like temperature
  - Humidity
  - Wind speed
  - Atmospheric pressure
- Loading indicator while fetching data
- Error handling for:
  - Invalid city names
  - Network issues
- Responsive UI updates

---

## 🧠 Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API
- Async/Await

---

### 🔗 API Used
OpenWeatherMap API:
```

[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)

````id="apiwk6"
```
---

### 🧠 Key Concepts Applied
- Callbacks and asynchronous flow
- Promises and chaining
- async/await syntax
- Fetch API
- Error handling using try/catch
- DOM manipulation
- State management (loading, error, success)

---

## 🚀 How to Run This Project

1. Clone the repository:
```bash
git clone https://github.com/Solfegesam/iyf-s10-week-06-Solfegesam.git
````

2. Navigate into the project:

```bash
cd iyf-s10-week-06-Solfegesam
```

3. Open the weather dashboard:

```
weather-dashboard/index.html
```

4. Add your API key inside `app.js`:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

---

## 📊 Outcome

This project demonstrates practical understanding of asynchronous JavaScript and API integration by building a functional real-world application.

---

## 👤 Author

**Solfegesam**
Week 6 Submission – IYF Weekend Academy (Season 10)

```

