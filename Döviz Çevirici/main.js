// const currencyFirst = document.getElementById("currencyFirst");
// const currencySecond = document.getElementById("currencySecond");
// const count = document.getElementById("count");
// const equal = document.getElementById("equal");
// const exchangeRate = document.getElementById("exchangeRate");


// //API' ye istek atma

// updateRate();
// function updateRate(){
//   fetch(`https://v6.exchangerate-api.com/v6/f1dd4224ebf0640c09ab55bf/latest/${currencyFirst.value}`)
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data);
//     const rate = data.conversion_rates[currencySecond.value];

//     equal.textContent = (count.value * rate).toFixed(2);
//     exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value};`
//   });
// }

// currencyFirst.addEventListener("change", updateRate);
// currencySecond.addEventListener("change", updateRate);
// count.addEventListener("input", updateRate);







const currencyFirst = document.getElementById("currencyFirst");
const currencySecond = document.getElementById("currencySecond");
const count = document.getElementById("count");
const equal = document.getElementById("equal");
const exchangeRate = document.getElementById("exchangeRate");


//API' ye istek atma

updateRate();
function updateRate(){
  fetch(`https://v6.exchangerate-api.com/v6/f1dd4224ebf0640c09ab55bf/latest/${currencyFirst.value}`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    const rate = data.conversion_rates[currencySecond.value];
    equal.textContent = (count.value * rate).toFixed(2);
    exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`
  });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);