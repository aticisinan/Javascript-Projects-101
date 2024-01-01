const backlinkEkle = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("close-modal");
const websiteName = document.getElementById("website-name");
const websiteUrl = document.getElementById("website-url");
const backLinkForm = document.getElementById("backlink-form");
const backlinksContainer = document.getElementById("backlinks-container");



let backLinks = [];




function modalTask(){
  modal.classList.toggle("active");
  websiteName.focus();
}

function validate(nameValue, urlValue){
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
  const regex = new RegExp(expression);

  if(!nameValue || !urlValue){
    alert("Lütfen gerekli alanları doldurunuz!");
    return false;
  }

  if(!urlValue.match(regex)){
    alert("Lütfen geçerli bir Web adresi giriniz!");
    return false;
  }
  return true;
};



function deleteBacklink(url){
  backLinks.forEach((keyValues, i)=>{
    if(keyValues.url === url){
      backLinks.splice(i, 1);
    }
  });
  localStorage.setItem("keyValues",JSON.stringify(backLinks));
  fetchBackLinks();
}



function buildBackLinks(){
  backlinksContainer.textContent = "";
  backLinks.forEach((keyValues) => {
    const {name,url} = keyValues;
    const item = document.createElement("div");
    item.classList.add("item");
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute('onclick', `deleteBacklink('${url}')`);


    const linkInfo = document.createElement("div");
    linkInfo.classList.add("linkinfo");

    const link = document.createElement("a");
    link.setAttribute("href", `${url}`);
    link.setAttribute("target", "_blank");
    link.textContent = name;

    linkInfo.appendChild(link);
    item.append(closeIcon, linkInfo);
    backlinksContainer.appendChild(item);
  })

}


function fetchBackLinks(){
  if(localStorage.getItem("keyValues")){
    backLinks = JSON.parse(localStorage.getItem("keyValues"));
  }
  buildBackLinks();
}

function storeBackLink(e){
  e.preventDefault();
  const nameValue = websiteName.value;
  let urlValue = websiteUrl.value;


  if(!urlValue.includes("https://") && !urlValue.includes("http://")){
    urlValue = `https://${urlValue}`;
  }

  console.log(urlValue, nameValue);
  console.log(e);
  if(!validate(nameValue, urlValue)){
    return false;
  };

  const keyValues ={
    name:nameValue,
    url:urlValue
  }

  backLinks.push(keyValues);
  localStorage.setItem("keyValues",JSON.stringify(backLinks));
  modal.classList.toggle("active");
  fetchBackLinks();
  backLinkForm.reset();
  websiteName.focus();
};



backlinkEkle.addEventListener("click",modalTask);
modalClose.addEventListener("click", modalTask);
backLinkForm.addEventListener("submit", storeBackLink);

fetchBackLinks();