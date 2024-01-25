# WeatherHub (React + Vite)

This repo contains source code for WeatherHub, a responsive and simple weather forecast API web app.

<img src="/src/assets/images/web-ss.PNG" alt="Project Desktop View" title="Desktop View" width="550px" height="500px">

<img src="/src/assets/images/mobile-ss.PNG" alt="Project Mobile View" title="Mobile View" width="280px" height="500px">

## Table of Contents

- [Installation](#installation)
- [Getting Started](#gettingstarted)
- [Features](#features)

## Installation

If you haven't install Nodejs, please download first from https://nodejs.org/en/download

To install and set up your project:

```bash
cd path/to/your-desired-directory

git clone -b feature/react https://github.com/josephkohhh/WeatherHubPro.git

cd WeatherHubPro

npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom
npm install axios
npm install react-syntax-highlighter

```

## Getting Started

OpenWeatherMap provides a free API key for a free tier plan

- Create An Account
  - Go to the OpenWeatherMap website (https://openweathermap.org/).
  - Sign up for a free account. If you already have an account, log in.
- Access API Keys:
  - After logging in, go to your account dashboard.
- Choose a Plan:
  - Select the free tier plan or any plan that suits your needs.
- Generate API Key:
  - Once you've selected a plan, generate a new API key.
- Use the API Key:
  - Assign the key in Api.js file

```bash
const apiKey = "YOUR_OWN_API_KEY";

```

It is important to note that you should always store any sensitive information in a server-side enviroment for security.

## Features

- Search City
- Fetch Current Weather Info
- Fetch Current Air Pollution Index Info
- Fetch Weather Forecast Info
