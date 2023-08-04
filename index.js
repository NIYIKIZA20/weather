
const apiKey = "d543fc09b8514bea927183446232907";
const apiUrl = `http://api.weatherapi.com/v1/current.json?aqi=no&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherImg =  document.querySelector(".weather img");
async function checkWeather(city){
   const response = await fetch(apiUrl +city+ `&key=${apiKey}`);
   var data = await response.json();
   console.log(data);
  


  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".humidity").innerHTML = data.current.humidity+ "%";
  document.querySelector(".temp").innerHTML = data.current.temp_c + " °C";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
 document.querySelector(".weather p").innerHTML =data.current.condition.text;
 weatherImg.src= data.current.condition.icon.slice(2);

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
