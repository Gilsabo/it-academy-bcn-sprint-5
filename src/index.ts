const jokeStatement = document.getElementById("joke");
const showDate = document.getElementsByClassName("weather")[0];
const scoreButtons = document.querySelectorAll(".buttoni");
let text: { joke: any; } ;

//Function to fetch the joke
const getJokes = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
         text = await data.json()
        return text.joke;
    } catch (error) {
        console.log(error)
    }
}

//Function that we pass as an agument to handle the result in the next function
function onSucces(joke: string) {
    jokeStatement!.style.display = "block"
    return jokeStatement!.textContent = joke
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



const reportAcudits: { joke: string, score: string | null, date: string }[] = []

const dateToString =()=>{
    const date = new Date;
    const stringDate =date.toISOString()
    return stringDate;
}

const getTextJoke = async() =>{
return text.joke;

}


class JokeInfo {
    joke: string;
    score: string | null;
    date: string

    constructor(joke: string, score: string | null, date: string) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}





scoreButtons.forEach(button => {
     button.addEventListener('click', async (e) => {
            const target = e.target as HTMLButtonElement
            let objectJoke = new JokeInfo( await getTextJoke(), target.textContent, dateToString());
            console.log(objectJoke);
            console.log(target)
            reportAcudits.push(objectJoke);
        })

});



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

