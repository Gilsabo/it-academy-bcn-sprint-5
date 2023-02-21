const jokeStatement = document.getElementById("joke");
const showDate = document.getElementsByClassName("weather")[0];

const reportAcudits: { joke: string, score: number, date: Date }[] = []
//Function to fetch the joke
const getJokes = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        const text = await data.json()
        return text.joke;
    } catch (error) {
        console.log(error)
    }
}

//Function that we pass as an agument to handle the result in the next function
function onSucces(joke: string) {
    jokeStatement!.style.display = "block"
    jokeStatement!.textContent = joke
}



//function to handle the result.
const jokeHandler = async () => {
    try {
        onSucces(await getJokes())
    } catch (error) {
        console.log(error)
    }
}

//add eventlistener to the button to show jokes
const buttonJoke = document.querySelector("button")
buttonJoke!.addEventListener('click', jokeHandler)

/*const geWeather = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
        const text = await data.json()
        console.log(text.joke);
        return text.joke;

    } catch (error) {
        console.log(error)
    }
}
*/

