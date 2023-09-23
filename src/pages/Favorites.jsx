import React, { useState, useEffect } from "react";
import "../css/index.css";
import "../css/HomePage.css";
import "../css/FavoritesPage.css";
import { FavoriteList } from "../components/functions";
import WeatherCard from "../components/WeatherCard";

const Favorites = () => {
  return (
    <div className="FavoritesPage-Background background-noRepeat-cover flex a">
      <div
        style={{
          backgroundColor: "transparent",
          width: "100%",
          marginTop: "250px",
        }}
        className="flex wh flex-row space-between flex-wrap "
      >
        {FavoriteList.map((data, index) => (
          <WeatherCard key={index} response={data.data} good={true} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
