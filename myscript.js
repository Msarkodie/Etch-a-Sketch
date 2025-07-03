const btn = document.querySelector(".btn");
const dialog = document.querySelector("#myDialog");
const container = document.querySelector(".container");
const confirmSize = document.querySelector("#confirm-btn");
const closs = document.querySelector("#close-btn");
const input = document.querySelector("#demoInput");
let gSize = 16;

btn.addEventListener("click",()=> dialog.showModal());
closs.addEventListener("click", ()=> dialog.close());
confirmSize.addEventListener("click", ()=> confirmUpdate());

function confirmUpdate(){
     gSize=input.value;
     makeGrids(gSize);
}

function makeGrids(size)
{
container.innerHTML = "";
for (let i = 0; i < size; i++)
{
  let column = document.createElement("div");
  column.classList.add("column");
  for (let j = 1; j <= size; j++)
  {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.border = "0.1px solid rgba(0, 0, 0, 0.05)";
    row.style.width = (960/size) + "px";
    row.style.height = (960/size) + "px";
    //row.innerText = (i * size) + j;
    column.appendChild(row);
  }
  container.appendChild(column);
}

}

