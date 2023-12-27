const apikey = "02a42fa91668c1e4932164e8aac2aca1";
const form = document.getElementById("form");
const city = document.querySelector(".city");
const weather = document.querySelector(".weather");
const icon = document.querySelector(".icon");
const temperatureDiv = document.querySelector(".temperature");
const detailsDiv = document.querySelector(".details");
const errorMsg = document.querySelector(".error");



form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
} )



async function getWeather(cityValue){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}`);
    const data =await response.json();
    console.log(data);
  
    const temperature = (Math.round(data.main.temp) - 273.15).toFixed(0);
    const icon = data.weather[0].icon;
    const details = [
      `Hissedilen: ${(Math.round(data.main.feels_like)-273.15).toFixed(0)}°C`,
      `Nem Oranı: ${data.main.humidity}% `,
      `Rüzgar: ${data.wind.speed} m/s`,
    ];
  
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    temperatureDiv.textContent =`${temperature}°C`;
  
    let detailsNew = details.map((details)=>`<div>${details}</div>`).join("");
    console.log(detailsNew);
    detailsDiv.innerHTML = detailsNew;
    errorMsg.textContent = "";
  }

catch(error){
  icon.innerHTML = "";
  temperatureDiv.textContent = "";
  errorMsg.textContent = "Lütfen Geçerli Bir Şehir Giriniz";
  detailsDiv.innerHTML = "";
}
};


