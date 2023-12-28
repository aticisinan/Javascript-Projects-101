const calculatorTitle = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const resetButton = document.querySelector(".reset");


let initialValue = 0;
let operatorValue = "";
let isWaiting = false;


function sendNumberValue(number){

if(isWaiting){
  calculatorTitle.textContent = number;
  isWaiting= false;
}else{
  const displayValue = calculatorTitle.textContent;
  if(displayValue == 0){
    calculatorTitle.textContent = number;
  }else{
    calculatorTitle.textContent = displayValue + number ;
  }
  }
}




function addDecimal(){
  if(!calculatorTitle.textContent.includes(".")){
    // calculatorTitle.textContent = `${calculatorTitle.textContent}.`;
    calculatorTitle.textContent += ".";
  }
}


function useOperator(operator){
  const currentValue = Number(calculatorTitle.textContent)

  if(operatorValue && isWaiting){
    operatorValue = operator;
    return;
  }

  if(!initialValue){
    initialValue = currentValue;
  }else{
    const calculation = calculate[operatorValue](initialValue,currentValue)
    calculatorTitle.textContent = calculation;
    initialValue = calculation;
  }
  isWaiting = true;
  operatorValue= operator;
}

const calculate = {
  "/":(firstNumber, secondNumber) => firstNumber/secondNumber,
  "*":(firstNumber, secondNumber) => firstNumber*secondNumber,
  "+":(firstNumber, secondNumber) => firstNumber+secondNumber,
  "-":(firstNumber, secondNumber) => firstNumber-secondNumber,
  "=":(firstNumber, secondNumber) => secondNumber,
}  


buttons.forEach(button => {
  if(button.classList.length === 0){
    button.addEventListener("click", ()=>sendNumberValue(button.value));
}else if (button.classList.contains("operator")){
  button.addEventListener("click", ()=>useOperator(button.value));
}else if (button.classList.contains("decimal")){
  button.addEventListener("click", ()=>addDecimal());
}
});

resetButton.addEventListener("click", resetAll);

function resetAll(){
  calculatorTitle.textContent = "0";
  initialValue = 0;
  operatorValue = "";
  isWaiting = false;
}
