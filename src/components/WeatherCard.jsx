import React from "react";
import "../css/index.css";
import "../css/HomePage.css";
import "../css/Img.css";
import { useState, useEffect } from "react";
import getDate from "./date";
import getWindDirection, {
  ConvertTimeZoneToImg,
  FavoriteList,
} from "./functions";

const WeatherCard = ({ response, good }) => {
  const [Day, setDay] = useState(getDate()[0]);
  const [Favorite, setFavorite] = useState(false);
  const [Date, setDate] = useState(getDate()[1]);
  const [City, setCity] = useState();
  const [Country, setCountry] = useState();
  const [MainStatus, setMainStatus] = useState();
  const [WindSpeed, setWindSpeed] = useState();
  const [Temp_max, setTemp_max] = useState();
  const [Temp_min, setTemp_min] = useState();
  const [CurrentTemperature, setCurrentTemperature] = useState();
  const [WindDirection, setWindDirection] = useState();
  const [WeatherImg, setWeatherImg] = useState("cloudy");

  function a(b) {
    setWeatherImg(b);
  }
  function AddCardToFavorite() {
    if (good) {
      if (!Favorite) {
        AddToFavorite(response);
        setFavorite(true);
      } else {
        RemoveFromFavorite();
        setFavorite(false);
      }
    }
  }
  useEffect(() => {
    if (good) {
      setCountry(response.data.sys.country);
      setCurrentTemperature((response.data.main.temp - 273.15).toFixed(0));
      setTemp_max((response.data.main.temp_max - 273.15).toFixed(0));
      setTemp_min((response.data.main.temp_min - 273.15).toFixed(0));
      setWindSpeed(response.data.wind.speed);
      setMainStatus(response.data.weather[0].description);
      setWindDirection(getWindDirection(response.data.wind.deg));
      setCity(response.data.name);

      const weatherIcon = ConvertTimeZoneToImg(
        response.data,
        response.data.coord.lat,
        response.data.coord.lon,
        response.data.sys.sunset,
        a
      );
    }
  }, [response]);

  const AddToFavorite = (CityResponse) => {
    const op = { city: CityResponse.data.name, data: CityResponse };
    if (!FavoriteList.some((item) => item.city === CityResponse.data.name)) {
      FavoriteList.push(op);
    }
  };
  const RemoveFromFavorite = () => {
    const index = FavoriteList.findIndex((item) => item.city === City);
    FavoriteList.splice(index, 1);
  };

  return (
    <>
      <div className="containerr flex flex-col">
        <div className="sharedClassContainer upperContainer flex flex-row">
          <ul className="flex flex-row">
            <li className="flex" id="day">
              {Day}
            </li>
            <li
              onClick={AddCardToFavorite}
              className={"flex  star"}
              id="star"
              style={Favorite ? { color: "black" } : { color: "white" }}
            >
              ★
            </li>
            <li className="flex" id="date">
              {Date}
            </li>
          </ul>
        </div>
        <div className="sharedClassContainer lowerContainer flex space-between flex-col">
          <div id="location">
            {City} - {Country}
          </div>
          <div id="degree" className="flex flex-row sharedClassContainer">
            <h1 id="Celsius"> {CurrentTemperature}° </h1>
            <div
              id={`${WeatherImg}`}
              className={`weatherImg background-noRepeat-cover`}
            ></div>
          </div>
          <div id="otherKnowledge" className="flex flex-row ">
            <div className="flex flex-column">
              <ul>
                <li id="highest">H↑ {Temp_max}°</li>
                <li id="lowest">L↓ {Temp_min}°</li>
              </ul>
            </div>
            <div className="flex flex-column">
              <ul>
                <li id="highest">{MainStatus}</li>
                <li id="highest">༄ Wind: {WindSpeed}km/h</li>
                <li id="highest">➤ Direction: {WindDirection}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
