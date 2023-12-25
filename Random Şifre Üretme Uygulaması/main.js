const createButton = document.querySelector(".createButton");
const sifre = document.querySelector(".sifre");
const copy = document.querySelector(".copy");
const alertontainer = document.querySelector(".alertContainer");

createButton.addEventListener("click", createPassword);

function createPassword(){
  const passwordLength = 14;
  const characters = 
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";
 
  let password = "";
 for(let i=0; i<passwordLength; i++){
    const randonNum = Math.floor(Math.random()*characters.length);
    password += characters[randonNum];
    sifre.value = password;
 }
}

copy.addEventListener("click", copyPassword);

function copyPassword(){
  sifre.select();
  navigator.clipboard.writeText(sifre.value);
  alertontainer.classList.toggle("active");
  alertontainer.textContent = `Şifre Kopyalandı! ${sifre.value}`;
  setTimeout(()=>{
  alertontainer.classList.toggle("active");
  },2000)
}

