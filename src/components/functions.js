import axios from "axios";

export default function getWindDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degrees % 360) / 45) % 8;
  return directions[index];
}

export var FavoriteList = [];

export function ConvertTimeZoneToImg(lat, lng, sunsetTimestamp, func) {
  const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=PFS6IN6NFOH0&format=json&by=position&lat=${lat}&lng=${lng}`;
  axios
    .get(url)
    .then((response) => {
      func(getImg(response.data.formatted, sunsetTimestamp));
    })
    .catch((err) => {
      console.error(err);
    });
}

const getImg = (time, sunsetTimestamp) => {
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const hours = sunsetDate.getHours();
  const minutes = sunsetDate.getMinutes();
  const seconds = sunsetDate.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  time = time.split(" ")[1];
  time = time.toString();

  if (time > formattedTime || time < "05:00:00") {
    return "cloudyMoon";
  } else if (time < formattedTime) {
    return "cloudySun";
  } else {
    return "cloudy";
  }
};
