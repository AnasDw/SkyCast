import React, { useState } from "react";
import "../css/HomePage.css";
import "../css/index.css";
import NavBarList from "../components/NavBarList";
import WeatherCard from "../components/WeatherCard";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const [response, setResponseData] = useState("");
  const [good, setBooleans] = useState(false);

  const handleInputChange = (newData) => {
    setResponseData(newData);
    setBooleans(true);
  };

  return (
    <>
      <div className="HomePage-Background background-noRepeat-cover flex flex-row">
        <div className="wh rh flex">
          <div>
            <SearchBox onInputChange={handleInputChange} />
          </div>
        </div>
        <div className="wh flex">
          <WeatherCard response={response} good={good} />
        </div>
      </div>
    </>
  );
};

export default Home;
