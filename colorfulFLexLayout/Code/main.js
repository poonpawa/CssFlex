const allItems = document.querySelectorAll("#item");
//for assigning random heights to the divs
function assignRandomHeights() {
    allItems.forEach(item => {
        item.style.height = `${Math.random() * 400 + 20}px`;
    });
}

//for assigning random colors to the divs
function randomColors() {
    allItems.forEach(item => {
        item.style.backgroundColor = `rgb(${Math.random() * 255}, 
        ${Math.random() * 255}, ${Math.random() * 255})`;
    });
}

window.addEventListener("load", assignRandomHeights);
window.addEventListener("load", randomColors);

//On changing the options
function showAxis() {
    const arrowElements = document.querySelectorAll(".arrow");
    arrowElements.forEach(el => {
        el.classList.toggle("hide");
    });
    //for proper row container adjustment
    document.querySelector(".row").classList.toggle("adjust");
}

document
    .querySelectorAll("#axis input[type='radio']")
    .forEach(el => el.addEventListener("change", showAxis));

//Changing the flex direction
function changeFlexDirection(e) {
    const rowDiv = document.querySelector(".row");
    rowDiv.style.flexDirection = this.value;

    const mainAxis = document.querySelector(".mainAxis"),
        crossAxis = document.querySelector(".crossAxis"),
        arrowTextMain = document.querySelector(".mainAxis .arrowtext"),
        arrowTextCross = document.querySelector(".crossAxis .arrowtext");

    switch (this.value) {
        case "column":
            mainAxis.style.transform = crossAxis.style.transform =
                "rotate(90deg)";
            arrowTextCross.style.transform = "rotate(270deg)";
            break;
        case "column-reverse":
            mainAxis.style.transform = crossAxis.style.transform =
                "rotate(270deg)";
            arrowTextCross.style.transform = "rotate(90deg)";
            break;
        case "row-reverse":
            // prettier-ignore
            mainAxis.style.transform = arrowTextMain.style.transform = "rotate(180deg)";
            crossAxis.style.transform = "rotate(180deg)";
            break;
        case "row":
            // prettier-ignore
            mainAxis.style.transform = arrowTextMain.style.transform = "rotate(0deg)";
            crossAxis.style.transform = "rotate(0deg)";
            break;
    }
}

// prettier-ignore
document.querySelector("#flex-direction").addEventListener("change", changeFlexDirection);
