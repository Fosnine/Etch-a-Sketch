axisAmount = 16;
for (let i=1; i <= axisAmount**2; i++) {
    divgrid = document.createElement("div");
    container.appendChild(divgrid);
    divgrid.classList.add("grid")
}
resetAndCreateGrid();



function createGrid(axisAmount) {
    for (let i=1; i <= axisAmount**2; i++) {
        divgrid = document.createElement("div");
        container.appendChild(divgrid);
        divgrid.classList.add("grid")
    }
}
function resetAndCreateGrid() {
    document.getElementById("reset").addEventListener("click", function(e) {
        for (let i=divgridList.length-1; i >= 0; i--) {
            container.removeChild(divgridList[i]);
        }
        axisAmount = prompt("How many squares per side should the grid be?")
        createGrid(axisAmount)
        document.documentElement.style.setProperty("--axisAmount", axisAmount)
    })
}
container = document.getElementById("container");
divgridList = document.getElementsByClassName("grid");