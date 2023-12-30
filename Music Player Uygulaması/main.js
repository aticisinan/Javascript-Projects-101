const music = document.querySelector("audio");
const image = document.querySelector("img");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const currentTimeSpan = document.getElementById("currentTime");
const totalTimeSpan = document.getElementById("totalTime");
const creator = document.getElementById("creator");
const title = document.getElementById("title");
const progressDiv = document.querySelector(".progressDiv");
const progress = document.querySelector(".progress");

const songs =[{
  name : "bootstrap",
  title : "Bootstrap 5 Eğitimi",
  creator: "Sinan"
},
{
  name : "c",
  title : "C Programlama Eğitimi",
  creator: "Sinan"
}
]



// Play/Pause Tusları 
let songIndex = 0;
let isPlaying = false;

function loadSong(song){
  title.textContent = song.title;
  creator.textContent = song.creator;
  music.src =`music/${song.name}.mp3`;
  image.src =`img/${song.name}.png`;
}

loadSong(songs[songIndex]);

playButton.addEventListener("click", ()=>{
  isPlaying ? pauseSong() : playSong();
})


function playSong(){
  music.play();
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
}

function pauseSong(){
  music.pause();
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
}



function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length -1
  }
  loadSong(songs[songIndex]);
  playSong();
} 


function nextSong(){
  songIndex++;
  if(songIndex > songs.length -1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}


function updateProgressBar(e){
  if(isPlaying){
    // console.log(e);
    const {currentTime, duration}=e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
    
    let durationMinutes = Math.floor(duration/60);
    let durationSecond = Math.floor(duration % 60);
    console.log(durationMinutes, durationSecond);

    if(durationSecond < 10){
      durationSecond = `0${durationSecond}`
    }
    if(durationSecond){
      totalTimeSpan.textContent = `${durationMinutes}:${durationSecond}`;
    }
     
    let currentMinutes = Math.floor(currentTime/60);
    let currentSecond = Math.floor(currentTime % 60);
    console.log(currentMinutes, currentSecond);

    if(currentSecond < 10){
      currentSecond = `0${currentSecond}`
    }
    if(currentSecond){
      currentTimeSpan.textContent = `${currentMinutes}:${currentSecond}`;
    } 
  } 
}

function setProgressBar(e){
  const width = e.srcElement.clientWidth;
  const clickX = e.offsetX;
  const {duration}=music
  music.currentTime = (clickX/width)*duration;
}

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressDiv.addEventListener("click", setProgressBar);
music.addEventListener("ended", nextSong);