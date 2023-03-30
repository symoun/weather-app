"use strict";

const form = document.querySelector("form");
const searchBar = document.querySelector("#search-bar");

form.onclick = function (e) {
  e.preventDefault();
  const city = searchBar.value;
  weatherResponse(city).then((response) => {
    const html = `
<div>City: ${response.city} </div>
<div>Local Time: ${response.time}</div>
`;
    document.querySelector("body").insertAdjacentHTML("beforeend", html);
  });
};

async function weatherResponse(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=36c64409cab2491698e105752233003&q=${city}&aqi=no`
    );
    const jsonResponse = await response.json();
    return {
      city: jsonResponse.location.name,
      time: jsonResponse.location.localtime,
    };
  } catch (e) {
    alert(e);
  }
}
