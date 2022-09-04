"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = "c221f15c0b15ddd4e2e35e75238d7f79";
const loadTemperature = () => __awaiter(void 0, void 0, void 0, function* () {
    const searchField = document.querySelector("#search-field");
    const city = searchField.value;
    try {
        const res = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = yield res.json();
        displayTemperature(data);
    }
    catch (error) {
        console.log(error);
    }
});
const displayTemperature = (data) => {
    const cityName = document.querySelector("#city-name");
    const temperature = document.querySelector("#temperature");
    const weather = document.querySelector("#weather");
    cityName.textContent = "";
    temperature.textContent = "";
    weather.textContent = "";
    cityName.innerText = data.name;
    temperature.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;
};
