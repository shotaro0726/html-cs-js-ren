let mouseMove = document.getElementById("mouseMove");
let positionDisplay = document.getElementById("positionDisplay");
let rangeWidth = 1;
let rangeHeight = 1;
let x;
let y;
let flag = false;
mouseMove.addEventListener("mousedown",function() {
    flag = true;
});
mouseMove.addEventListener("mouseup",function() {
    flag = false;
});

mouseMove.addEventListener("mousemove", function(e) {
    drawStatusDisplay();
    if(flag){
        x = e.pageX;
        y = e.pageY;
        let div = document.createElement("div");
        div.setAttribute("class","dot");
        div.style.top = y + "px";
        div.style.left = x + "top";
        div.style.width = rangeWidth + "px";
        div.style.height = rangeHeight + "px";
        mouseMove.appendChild(div);
    }
});

function drawStatusDisplay() {
    if(flag) {
        positionDisplay.innerHTML = "絵画中";
    }else{
        positionDisplay.innerHTML = "絵画停止中";
    }
}

let range = document.getElementById("range");
let rangeDisplay = document.getElementById("rangeDisplay");

let dotElements = document.getElementsByClassName("dot");
function rangeChange() {
    rangeDisplay.innerHTML = range.value;
    rangeWidth = range.value;
    rangeHeight = range.value;
}

range.addEventListener("input",rangeChange);