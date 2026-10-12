const CONTAINER = document.querySelector(".container");

function createUI() {
    const button = document.createElement("button");
    button.classList.add("configure-grid");
    button.innerText = "Configure Grid";
    button.addEventListener("click", gridHandler);
    document.body.prepend(button);
    createGrid(16);
}

function touchSquareHandler(e) {
    e.target.classList.toggle("touched");
}

function gridHandler(e) {
    let size;
    let promptMsg = "What sized grid would you like, max 100";
    while (true){
        size = prompt(promptMsg);
        // cancel or esc of prompt is allowed, use default
        if (size == null) {
            size = 16;
            break;
        }
        size = Number(size);
        if (!size || size != parseInt(size) || size < 2 || size > 100){
            promptMsg = "Enter an integer value from 2 to 100";
        } else {
            break;
        }
    }
    
    CONTAINER.innerHTML = "";
    createGrid(size);

}

function createGrid(size) {
       for (let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", touchSquareHandler)
        CONTAINER.appendChild(square);
        const val = 100 / size;
        square.style.width = `${val}%`;
        square.style.height = `${val}%`;
    }
}

createUI();