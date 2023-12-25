const wordText = document.getElementById("word");
const button = document.querySelector(".button");
const translatedDiv = document.querySelector(".translatedDiv");
const word = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");





async function translate(){
  translatedDiv.style.display = "none";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordText.value}`;
  const result = await fetch(url).then((res)=>(res.json()));
  console.log(result);
  if(result.title){
    alert("Hata");
  }else{
    translatedDiv.style.display = "block";
    word.textContent = result[0].word;
    meaning.textContent = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
    }
}

button.addEventListener("click", translate);