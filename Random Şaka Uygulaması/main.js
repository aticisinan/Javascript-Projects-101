const button = document.querySelector(".clickMe");
const joke = document.querySelector(".answer");

const apiKey = "ZWEAvO/9aPXpwgKnwtSKqQ==iKgn4y2lIvajQRuB";
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const options={
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
}

async function getJoke() {
  try {
    joke.textContent = "Updating...";
    button.textContent = "Loading";
    button.disabled = true;
    if(button.disabled){
      button.style.background = "grey";
    }
    const istek = await fetch(apiURL, options);
    const data = await istek.json();
    joke.textContent = data[0].joke;
    button.textContent = "TELL ME A JOKE";
    button.disabled = false;
    button.style.background = "rgb(37, 30, 100)";

  } catch (error) {
    console.error("Bir hata oluştu:", error);
    button.disabled = false;
    button.textContent = "TELL ME A JOKE";
    joke.textContent = "Try Again";
    button.style.background = "rgb(37, 30, 100)";
  }
}

button.addEventListener("click", getJoke);