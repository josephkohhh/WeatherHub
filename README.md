# WeatherHub (React + Vite)

This repo contains source code for WeatherHub, a responsive and simple weather forecast API web app.

<img src="/src/assets/images/wh-banner.PNG" alt="Banner Image" title="Banner Image" width="550px" height="450px">

## Table of Contents

- [Installation](#Installation)
- [Getting Started](#gettingstarted)
- [Folder Structure](#FolderStructure)
- [Features](#Features)

## Installation

If you haven't download Nodejs, please install first from https://nodejs.org/en/download

To install and set up your project:

```bash
cd path/to/your-desired-directory

git clone -b feature/react https://github.com/josephkohhh/WeatherHub.git

cd WeatherHub

npm install

```

## Folder Structure

```
WeatherHub
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ assets
│  │  └─ images
│  │     ├─ air.svg
│  │     ├─ wh_banner.PNG
│  │     └─ Component-Diagram.png
│  ├─ components
│  │  ├─ containers
│  │  │  ├─ AirPollution.jsx
│  │  │  ├─ Current.jsx
│  │  │  ├─ Forecast.jsx
│  │  │  └─ WeatherHub.jsx
│  │  ├─ form
│  │  │  └─ Form.jsx
│  │  ├─ theme
│  │  │  └─ FontTheme.js
│  │  └─ ui
│  │     ├─ AboutTitle.jsx
│  │     ├─ AccordionDiagram.jsx
│  │     ├─ Diagram.jsx
│  │     ├─ InfoStack.jsx
│  │     ├─ IntroTitle.jsx
│  │     ├─ Navbar.jsx
│  │     ├─ SkeletonLayout.jsx
│  │     ├─ TableDiagram.jsx
│  │     └─ UserInput.jsx
│  ├─ data
│  │  └─ constants.js
│  ├─ fonts
│  │  ├─ Poppins-Regular.ttf
│  │  └─ ...
│  ├─ hooks
│  │  └─ StateManager.jsx
│  ├─ lib
│  │  └─ ReactSyntaxHighligherComponent.jsx
│  ├─ pages
│  │  ├─ About.jsx
│  │  └─ Home.jsx
│  ├─ services
│  │  └─ api.js
│  └─ utils
│     └─ calculateDateTime.js
└─ vite.config.js

```

## Getting Started

OpenWeatherMap provides a free API key for a free tier plan.

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

It is important to note that you should always store sensitive information in a server-side environment for security.

## Features

- Search City
- Fetch Current Weather Info
- Fetch Current Air Pollution Index Info
- Fetch Weather Forecast Info
