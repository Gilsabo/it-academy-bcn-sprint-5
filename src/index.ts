const jokeStatement = document.getElementById("joke");
const showDate = document.getElementsByClassName("weather")[0];
const scoreButtons = document.querySelectorAll(".buttoni");
const weatherText = document.querySelector(".weather");
let textJoke: {
    joke: string;
}

//Function to fetch the joke
const getJokes = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        textJoke = await data.json()
        return textJoke.joke;
    } catch (error) {
        console.log(error)
    }
}

let textJokeChuck: {
    value: string;
}
const getChuckNorrisJokes = async () => {
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        textJokeChuck = await data.json();
        return textJokeChuck.value;
    } catch (error) {
        console.log(error);
    }
}


//Function that we pass as an argument to handle the result in the next function



function onSucces(functJoke: any, functChuck: any) {
    let randomNumber: number = Math.floor((Math.random() * 2) + 1);;
    if (randomNumber % 2 === 0) {
        jokeStatement!.style.display = "block";
        return jokeStatement!.textContent = functJoke;
    } else {
        jokeStatement!.style.display = "block";
        return jokeStatement!.textContent = functChuck;

    }
}



//function to handle the result.
const jokeHandler = async () => {
    try {
        onSucces(await getJokes(), await getChuckNorrisJokes())
    } catch (error) {
        console.log(error)
    }
}

//add eventlistener to the button to show jokes
const buttonJoke = document.querySelector("button")
buttonJoke!.addEventListener('click', jokeHandler)


//array ob objects to report the score of each joke
const reportAcudits: { joke: string|null, score: string | null, date: string }[] = []

const dateToString = () => {
    const date = new Date;
    const stringDate = date.toISOString()
    return stringDate;
}


class JokeInfo {
    joke: string |null;
    score: string | null;
    date: string

    constructor(joke: string |null, score: string | null, date: string) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}


/*function textHandler(){
    if (jokeStatement!.textContent = textJoke.joke) {
        return textJoke.joke;
    } else if(jokeStatement!.textContent = textJokeChuck.value){
        return textJokeChuck.value;

    }
}*/


// Save and object with the joke and score after clicking the ratings
scoreButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
        const target = e.target as HTMLButtonElement
        let objectJoke = new JokeInfo(jokeStatement!.textContent, target.textContent, dateToString());
        console.log(objectJoke);
        console.log(target)
        reportAcudits.push(objectJoke);
    })

});

// fetchin data of and API weather
let textWeather: any;
const getWeather = async () => {
    try {
        const data = await fetch('http://api.weatherapi.com/v1/current.json?key=a2d4b069d4874b3293d72940232302&q=Barcelona&aqi=no', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        textWeather = await data.json()
        return textWeather.current.condition.text
    } catch (error) {
        console.log(error)
    }
}
// function that will print the text weather in the DOM and take the functio get weather as an argument
function onSuccesWeather(weather: any) {
    weatherText!.textContent = weather
}
//function to handle the result of weather
const shwoWeather = async () => {
    try {
        return onSuccesWeather(await getWeather())
    } catch (error) {
        console.log(error)
    }
}

shwoWeather();

