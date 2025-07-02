
function makeGrids(size)
{
let container = document.querySelector(".container");
for (let i = 0; i < size; i++)
{
  let column = document.createElement("div");
  column.classList.add("column");
  for (let j = 1; j <= size; j++)
  {
    let row = document.createElement("div");
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

makeGrids(100);