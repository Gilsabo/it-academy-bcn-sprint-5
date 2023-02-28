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
let textJoke;
const degrees = document.querySelector(".degrees");
const imgWeather = document.querySelector("img");
const getJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        textJoke = yield data.json();
        return textJoke.joke;
    }
    catch (error) {
        console.log(error);
    }
});
let textJokeChuck;
const getChuckNorrisJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        textJokeChuck = yield data.json();
        return textJokeChuck.value;
    }
    catch (error) {
        console.log(error);
    }
});
function onSucces(functJoke, functChuck) {
    let randomNumber = Math.floor((Math.random() * 2) + 1);
    ;
    if (randomNumber % 2 === 0) {
        jokeStatement.style.display = "block";
        return jokeStatement.textContent = `"${functJoke}"`;
    }
    else {
        jokeStatement.style.display = "block";
        return jokeStatement.textContent = `"${functChuck}"`;
    }
}
const jokeHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        onSucces(yield getJokes(), yield getChuckNorrisJokes());
    }
    catch (error) {
        console.log(error);
    }
});
const buttonJoke = document.querySelector(".jokeButton");
buttonJoke.addEventListener('click', jokeHandler);
const reportAcudits = [];
const dateToString = () => {
    const date = new Date;
    const stringDate = date.toISOString();
    return stringDate;
};
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
        let objectJoke = new JokeInfo(jokeStatement.textContent, target.value, dateToString());
        console.log(objectJoke);
        console.log(target.value);
        reportAcudits.push(objectJoke);
    }));
});
let textWeather;
const getWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('http://api.weatherapi.com/v1/current.json?key=a2d4b069d4874b3293d72940232302&q=Barcelona&aqi=no', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        textWeather = yield data.json();
        return textWeather;
    }
    catch (error) {
        console.log(error);
    }
});
function onSuccesWeather(weather) {
    let stringIcon = weather.current.condition.icon;
    let lastSeven = stringIcon.slice(-7);
    imgWeather.src = `day/${lastSeven}`;
    degrees.textContent = weather.current.feelslike_c;
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