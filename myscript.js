let GRIDSIZE = 16;

//Getting access to the elements declared in html
const myGridContainer = document.getElementById("grid-container");
const myGrid = document.getElementById("grid");
const sizeButton = document.getElementById("choose-size");
const dialog = document.querySelector("dialog");
const closs = document.getElementById("close");
const sizeValue = document.getElementById("sizeSelect");
const resetButton = document.getElementById("reset-state");
const eraseButton = document.getElementById("erase-state");
const rangeDiv = document.getElementById("range-div");
const rangeInfo = document.createElement("label");
rangeInfo.classList.add("info");
rangeInfo.innerHTML = "The current size of grid is " + `${sizeValue.value}`;
rangeDiv.appendChild(rangeInfo);
//const colorPicker = document.getElementById("color-picker");
//const colorSwitch = document.getElementById("color-switch");

const DEFAULTCOLOR = "#000000"
let isDrawing = false;
let isErasing = false;
let currentSize = 16;
let currentColor =  DEFAULTCOLOR;
//let coloredDrawing = false;


//Event handlers
sizeButton.addEventListener("click",()=> {dialog.showModal()});
closs.addEventListener("click", ()=> dialog.close());

//Reset feature added
resetButton.addEventListener("click", ()=> {
     //removeGrid();
     //createGrid(currentSize)
     document.querySelectorAll("div.cell").forEach((item)=> {
           item.style.backgroundColor = "white";
     });
        
     });
eraseButton.addEventListener("click", (e)=> eraseDrawing(e));
eraseButton.addEventListener("dblclick", (e)=> eraseDrawing(e));

//FUNCTION TO CREATE THE GRID FOR DRAWING
function createGrid(gSize){
 for (let i=0; i< (gSize*gSize); i++ )
 {
  let gridCell = document.createElement("div");
  gridCell.style.height = `${(600/gSize)-0.25}px`;
  gridCell.style.width = `${(600/gSize)-0.25}px`;
  gridCell.classList.add("cell");
  gridCell.addEventListener("mousedown",(e)=> draw(e));
  gridCell.addEventListener("mouseover", (e)=> draw(e));
  gridCell.addEventListener("mouseup", (e)=> draw(e));
  gridCell.addEventListener("drag", (e)=> draw(e));
  gridCell.addEventListener("mouseover", (e)=> erase(e));
  myGrid.appendChild(gridCell);
 }
}

//change the size of the grid with the slider in the modal
sizeValue.oninput = function() {
currentSize = this.value;    
rangeInfo.innerHTML = "The current size of grid is " + currentSize;
removeGrid();
createGrid(currentSize);
}

//Function to remove the current grid
function removeGrid()
{
   myGrid.innerHTML = "";
}

//Funtion to draw on grid
function draw(e)
{
    
   if(e.type === "mousedown") 
   {
     isDrawing = true;
     e.target.style.backgroundColor = currentColor;
   }

  else if(e.type === "mouseover" && isDrawing)  
     {
      e.target.style.backgroundColor = currentColor;
     }

  else 
    {
      isDrawing = false;
    }  
   }

function eraseDrawing(e){
    if(e.type === "click")
    {
       isErasing = true;
       isDrawing = false;
    
    }

    else if(e.type === "dblclick")

    {
            isErasing = false;
    }
   
}

function erase(e){
    if (e.type === "mouseover" && isErasing)
    {
        e.target.style.backgroundColor = "white";
    }

}
/*

 
 colorSwitch.addEventListener("input", ()=> {

    if(colorSwitch.checked)
    {
        coloredDrawing = colorSwitch.checked;
        currentColor = colorPicker.value;
    }

    else{
        currentColor = DEFAULTCOLOR;
    }

    
    colorPicker.addEventListener("input",(e)=>changeColor(e)); 
    }
);  
     

//Color functions
function changeColor(event){
     currentColor = event.target.value;
}



 */



 

createGrid(GRIDSIZE);



