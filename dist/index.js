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
const jokeStatement = document.getElementById("joke");
const showDate = document.getElementsByClassName("weather")[0];
const scoreButtons = document.querySelectorAll(".buttoni");
const weatherText = document.querySelector(".weather");
let text;
const getJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        text = yield data.json();
        return text.joke;
    }
    catch (error) {
        console.log(error);
    }
});
function onSucces(joke) {
    jokeStatement.style.display = "block";
    return jokeStatement.textContent = joke;
}
const jokeHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        onSucces(yield getJokes());
    }
    catch (error) {
        console.log(error);
    }
});
const buttonJoke = document.querySelector("button");
buttonJoke.addEventListener('click', jokeHandler);
const reportAcudits = [];
const dateToString = () => {
    const date = new Date;
    const stringDate = date.toISOString();
    return stringDate;
};
const getTextJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    return text.joke;
});
class JokeInfo {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
scoreButtons.forEach(button => {
    button.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
        const target = e.target;
        let objectJoke = new JokeInfo(yield getTextJoke(), target.textContent, dateToString());
        console.log(objectJoke);
        console.log(target);
        reportAcudits.push(objectJoke);
    }));
});
let texti;
const getWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('http://api.weatherapi.com/v1/current.json?key=a2d4b069d4874b3293d72940232302&q=Barcelona&aqi=no', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        texti = yield data.json();
        return texti.current.condition.text;
    }
    catch (error) {
        console.log(error);
    }
});
function onSuccesWeather(weather) {
    weatherText.textContent = weather;
}
const shwoWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return onSuccesWeather(yield getWeather());
    }
    catch (error) {
        console.log(error);
    }
});
shwoWeather();
//# sourceMappingURL=index.js.map