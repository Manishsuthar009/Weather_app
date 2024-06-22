const apiKey = "0835e701eef0af7096a794bf28314f9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
  document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

  document.querySelector(".weather").style.display = "block";


  if(data.weather[0].main == "Clouds") {
    weatherIcon.src="images/clouds.jpg";
  }
  else if(data.weather[0].main == "Clear") {
    weatherIcon.src="images/clear.jpg";
  }
  else if(data.weather[0].main == "Mist") {
    weatherIcon.src="images/mist..jpg";
  }
  else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src="images/drizzle.jpg";
  }
  else if(data.weather[0].main == "Snow") {
    weatherIcon.src="images/snow..jpg";
  }
  else if(data.weather[0].main == "Rain") {
    weatherIcon.src="images/rain..jpg";
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});
