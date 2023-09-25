import axios from "axios";

export default function getWindDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degrees % 360) / 45) % 8;
  return directions[index];
}

export var FavoriteList = [];

export function ConvertTimeZoneToImg(data, lat, lng, func) {
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=PFS6IN6NFOH0&format=json&by=position&lat=${lat}&lng=${lng}`;
  axios
    .get(url)
    .then((response) => {
      func(getImg(response.data.formatted, data));
    })
    .catch((err) => {
      console.error(err);
    });
}

const getImg = (time, data) => {
  const sunrise = new Date(data.sys.sunrise * 1000);
  const s_hours = sunrise.getHours();
  const s_minutes = sunrise.getMinutes();
  const s_seconds = sunrise.getSeconds();

  const s_formattedTime = `${s_hours.toString().padStart(2, "0")}:${s_minutes
    .toString()
    .padStart(2, "0")}:${s_seconds.toString().padStart(2, "0")}`;

  time = time.split(" ")[1];
  time = time.toString();

  if (time < s_formattedTime) {
    if (data.rain == null) return "cloudyMoon";
    else if (data.rain != null) return "cloudyMoonRain";
    else return "thunderDark";
  } else if (time > s_formattedTime) {
    if (data.rain == null) return "cloudySun";
    else if (data.rain != null) return "cloudySunRain";
    else if (data.clouds.all <= 20) return "sun";
  } else {
    return "cloudy";
  }
};
