const counter = document.querySelector(".counter");
const loadingBarFront = document.querySelector(".loadingBarFront");

let number = 0;

function updateNumber(){
  counter.textContent = number + "%";
  loadingBarFront.style.width = number + "%";
  number++;

  if(number < 101){
    setTimeout(updateNumber, 15);
  }
  if(number == 100){
    number = 0;
  }
 
};




updateNumber();
