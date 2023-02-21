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
const reportAcudits = [];
const getJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        const text = yield data.json();
        return text.joke;
    }
    catch (error) {
        console.log(error);
    }
});
function onSucces(joke) {
    jokeStatement.style.display = "block";
    jokeStatement.textContent = joke;
}
const jokeHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const joke = yield getJokes();
        onSucces(yield getJokes());
    }
    catch (error) {
        console.log(error);
    }
});
const buttonJoke = document.querySelector("button");
buttonJoke.addEventListener('click', jokeHandler);
const geWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        const text = yield data.json();
        console.log(text.joke);
        return text.joke;
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map