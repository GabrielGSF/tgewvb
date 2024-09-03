"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCity = setCity;
async function setCity(lat, lon, timezone, name, admin1, country) {
    let City = {
        latitude: lat,
        longitude: lon,
        timezone: timezone,
        name: name,
        admin1: admin1,
        countryName: country
    };
    let results = document.querySelectorAll(".result-item");
    if (results.length > 0) {
        document.querySelector(".result-item").remove();
    }
    //City Information
    document.getElementById("cityName").value = City.name + ", " + City.admin1 + ", " + City.countryName;
    document.querySelector('#cityInformation').innerHTML = `${City.name} - ${City.admin1} - ${City.countryName}`;
    document.querySelector('#latitude').innerHTML = `${City.latitude}`;
    document.querySelector('#longitude').innerHTML = `${City.longitude}`;
    document.querySelector('#timezone').innerHTML = `${City.timezone}`;
}
window.setCity = setCity;
//# sourceMappingURL=setCity.js.map