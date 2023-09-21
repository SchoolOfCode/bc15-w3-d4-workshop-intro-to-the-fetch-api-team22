async function fetchJoke(){
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json"
        }
    });
let data = await response.json()
alert(data.joke)
}

fetchJoke()