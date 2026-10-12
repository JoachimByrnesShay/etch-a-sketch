const CONTAINER = document.querySelector(".container");

function createUI() {
    for (let i = 0; i <= 15; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", touchSquareHandler)
        CONTAINER.appendChild(square);
    }
}

function touchSquareHandler(e) {
    e.target.classList.toggle("touched");
}

createUI();