const CONTAINER = document.querySelector(".container");

function createUI() {
    for (let i = 0; i <= 15; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        CONTAINER.appendChild(square);
    }
}

createUI();