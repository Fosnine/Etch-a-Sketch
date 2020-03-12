let axisAmount = 16;
const container = document.getElementById("container");
let divgridList = document.getElementsByClassName("grid")
for (let i=1; i <= axisAmount**2; i++) {
    divgrid = document.createElement("div");
    container.appendChild(divgrid);
    divgrid.classList.add("grid");
}
hoverColorChange();







function createGrid(axisAmount) {
    for (let i=1; i <= axisAmount**2; i++) {
        divgrid = document.createElement("div");
        container.appendChild(divgrid);
        divgrid.classList.add("grid")
    }
}
function hoverColorChange() {
    divgridList = document.getElementsByClassName("grid");
    
    for (i=divgridList.length - 1; i>=0; i--) {
        let brightness = 100;
        divgridList[i].addEventListener("mouseover", function(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            if (e.target.style.backgroundColor == "") { 
                e.target.style.backgroundColor = `#${randomColor}`;   
            } else {
                e.target.style.filter = `brightness(${brightness}%)`;
                brightness -= 20;
            }
            
        }) 
        
    }
}







document.getElementById("reset").addEventListener("click", function(e) {
    for (let i=divgridList.length-1; i >= 0; i--) {
        container.removeChild(divgridList[i]);
    }
    axisAmount = prompt("How many squares per side should the grid be?")
    createGrid(axisAmount)
    document.documentElement.style.setProperty("--axisAmount", axisAmount)
    hoverColorChange();
})