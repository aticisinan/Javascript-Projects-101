const button = document.querySelector(".watchButton");
const videoContainer = document.querySelector(".active");
const closeButton = document.querySelector(".fa-xmark");
const video = document.querySelector("video");


function popUp(){
  videoContainer.classList.toggle("active");
  video.play();
}
function closeMark(){
  videoContainer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}

button.addEventListener("click", popUp);
closeButton.addEventListener("click", closeMark);