const allItems = document.querySelectorAll("#item");

function assignRandomHeights() {
    allItems.forEach(item => {
        item.style.height = `${Math.random() * 400 + 20}px`;
    });
}

assignRandomHeights();

function randomColors() {
    allItems.forEach(item => {
        item.style.backgroundColor = `rgb(${Math.random() * 255}, 
        ${Math.random() * 255}, ${Math.random() * 255})`;
    });
}

randomColors();
