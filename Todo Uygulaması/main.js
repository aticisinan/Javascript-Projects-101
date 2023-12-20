const inputValue = document.querySelector(".yazi");
const buttonClick = document.querySelector(".button");
const liste = document.querySelector(".todos");
const addForm = document.querySelector(".ekle");
const search = document.querySelector(".search input");


 const generateTemplate = (todo) => { 
    const listItem = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;
  liste.innerHTML += listItem;
  inputValue.value = "";
  
 }

buttonClick.addEventListener("click", e =>{
  e.preventDefault();
  const todo = inputValue.value.trim();
  if(todo.length){
    generateTemplate(todo);
    
  }
  
} );

addForm.addEventListener("submit", e =>{
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length){
    generateTemplate(todo);
    
  }
  
});

liste.addEventListener("click", e => {
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }
})


// const filterTodos = term => {
//   Array.from(liste.children)
//   .filter(todo => !todo.textContent.includes(term))
//   .forEach(todo => todo.classList.add("filtered"));
  
// }


const filterTodos = term => {
  Array.from(liste.children).forEach(todo => {
    todo.classList.remove("filtered");

    if(!todo.textContent.includes(term)){
      todo.classList.add("filtered");
    }
  })  
}





search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
})












