import React from "react";
import "../css/SearchBox.css";
import "../css/index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherUpdates from "../components/WeatherCard";

function SearchBox({ onInputChange }) {
  const [city, setCity] = useState("New York");
  const [Boolean, setBoolean] = useState(false);

  function capitalizeFirstLetter(inputString) {
    if (inputString.length <= 2) {
      return "";
    }
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  useEffect(() => {
    const API_key = "1eab5405a37506ebfc5141cb4b137e97";
    const Up_city = capitalizeFirstLetter(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${Up_city}&appid=${API_key}`;

    axios
      .get(url)
      .then((response) => {
        setBoolean(true);
        const responseData = response.data;
        onInputChange(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [city]);

  const generateTitle = (e) => {
    const title = e;
    if (title.trim() === "") {
      setCity(title);
      setBoolean(false);
    } else {
      setCity(title);
    }
  };

  return (
    <div className="search-Box flex flex-col">
      <h1>SkyCast Generator</h1>
      <div className="form">
        <label htmlFor="cityInput">Enter a City: </label>
        <input
          className="form_"
          type="text"
          id="cityInput"
          placeholder="➢ E.g., New York"
          value={city}
          onInput={(e) => {
            generateTitle(e.target.value);
          }}
          required
        />
      </div>
    </div>
  );
}

export default SearchBox;
