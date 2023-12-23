const baslıklar = document.querySelectorAll(".accordion");

baslıklar.forEach((icerik)=>{
  const icerikButton = icerik.querySelector(".accordionButton");
  icerikButton.addEventListener("click",()=>{
    icerik.querySelector(".minusIcon").classList.toggle("active");
    icerik.querySelector(".plusIcon").classList.toggle("active");
    icerik.querySelector(".accordionText").classList.toggle("active");
  });

})