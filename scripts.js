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
    console.log(e)
    const sq = e.target;
    if (!sq.classList.contains("touched")){
        const bg = getRandomRGB();
        sq.style.backgroundColor = bg;
        sq.style.opacity = "0.19";
        sq.classList.add("touched");
        return;
    }
    let val = Number(sq.style.opacity);
    if (val < 1){
        val += 0.09;
        sq.style.opacity = String(val);
    }
}

function getRandomRGB() {
    let values = []
    for (let i = 0; i < 3; i++){
        values.push( Math.floor(Math.random()*256));
    }
    return `rgb(${values.join(",")})`
};

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
        // NaN || float || out of range
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