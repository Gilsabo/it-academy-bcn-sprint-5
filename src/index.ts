const jokeStatement = document.getElementById("joke");
const showDate = document.getElementsByClassName("weather")[0];


const reportAcudits : { joke: string, score: number, date:Date }[] =[]

const getJokes = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept':'application/json' }
        })
        const text = await data.json()
        //jokeStatement!.style.display = "block"
        //getDate(date)
        //return jokeStatement!.textContent=text.joke;
        return text.joke;
    } catch (error) {
        console.log(error)
    }
}
function onSucces(joke :string){
    jokeStatement!.style.display = "block"
    jokeStatement!.textContent =joke
}




const jokeHandler =async () => {
    try{
const joke = await getJokes()
onSucces(await getJokes())

    }catch (error){
    console.log(error)
}
}


const buttonJoke = document.querySelector("button")
buttonJoke!.addEventListener('click', jokeHandler)


const geWeather = async () => {
    try {
        const data = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept':'application/json' }
        })
        const text = await data.json()
        console.log(text.joke);
        return text.joke;
        
    } catch (error) {
        console.log(error)
    }
}


