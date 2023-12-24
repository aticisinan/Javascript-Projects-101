const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");




function calculateTemp(event){
  const currentValue = Number(event.target.value);
  console.log(event);

  switch (event.target.name) {
    case "celsius":
       fahrenheit.value = ((currentValue*1.8 + 32)).toFixed(2);
       kelvin.value = ((currentValue + 273.15)).toFixed(2);
      break;
    case "fahrenheit":
        celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
        kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
       break;
    case "kelvin":
        celsius.value = ((currentValue - 273.32)).toFixed(2);
        fahrenheit.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
       break;
    default:
      break;
  }
  if(event.target.value == "" || event.target.value === "0"  ){
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
  }

}
