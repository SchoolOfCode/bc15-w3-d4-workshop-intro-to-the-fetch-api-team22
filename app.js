// Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
  const joke = await fetchJoke();
  displayJoke(joke);
}

// Function to retrieve a random joke
// function retrieveJoke() {
//   const randomIndex = Math.floor(Math.random() * jokes.length);
//   return jokes[randomIndex];
// }

async function fetchJoke(){
  const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
          Accept: "application/json"
      }
  });
let data = await response.json()
return data.joke
}

// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);
