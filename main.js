// const successBtn = document.querySelector("#btnClick");
// console.log(successBtn);

// const allDangerBtns = document.querySelectorAll(".btn-danger");
// console.log(allDangerBtns);

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();

// function getRand(start, end) {
//     return Math.round(Math.random() * (end - start) + start);
// }

// successBtn.addEventListener("click", function () {
//     console.log(getRand(100,0));
// });

// const boxDiv = document.querySelector(".box");
// allDangerBtns.forEach(btnItem => {
//     btnItem.addEventListener("click", function () {
//         switch (this.textContent.toLowerCase()) {
//             case "top":
//                 boxDiv.style.marginTop = (Number(boxDiv.style.marginTop.split("px")[0]) + 100) + "px";;
//                 break;
//             case "bottom":
//                 boxDiv.style.marginBottom = (Number(boxDiv.style.marginBottom.split("px")[0]) + 100) + "px";;
//                 break;
//             case "left":
//                 boxDiv.style.marginLeft = (Number(boxDiv.style.marginLeft.split("px")[0]) + 100) + "px";;
//                 break;
//             case "right":
//                 boxDiv.style.marginRight = (Number(boxDiv.style.marginRight.split("px")[0]) + 100) + "px";
//                 break;
//             default:
//                 break;
//         }
//     });
// });

const startBtn = document.querySelector("#start");
const allBoxes = document.querySelectorAll(".box");
const winnerColorBtn = document.querySelector("#winnerColor");
const resultBtn = document.querySelector("#result");
var luckyColor = undefined;
var colorsCollection = [];
var gameLogic = false;

function generateRand(start, end) {
    return Math.round(Math.random() * (end - start) + start);
}

function generateColor() {
    return `rgb(${generateRand(0, 255)},${generateRand(0, 255)},${generateRand(0, 255)})`;
}

function getRandomColorsList() {
    var tmpColors = [];
    while (tmpColors.length < 6) {
        tmpColors.push(generateColor());
    }

    return tmpColors;
}


function setColorsToBoxes(colorsList) {
    allBoxes.forEach(item => {
        item.style.backgroundColor = colorsList.pop()
    })
}

function getLuckyColor(colorsList) {
    return colorsList[generateRand(0, colorsList.length - 1)];
}

function resetGame(){
    resultBtn.classList.remove("btn-danger");
    resultBtn.classList.remove("btn-success");
    resultBtn.classList.add("btn-warning");
    resultBtn.textContent = "............";
}


startBtn.addEventListener("click", function () {
    colorsCollection = getRandomColorsList();
    luckyColor = getLuckyColor(colorsCollection);
    setColorsToBoxes(colorsCollection);
    winnerColorBtn.textContent = luckyColor;
    gameLogic = true;
    resetGame();
});


allBoxes.forEach(boxItem => {
    boxItem.addEventListener("click", function () {
        if (gameLogic) {
            if (luckyColor == this.style.backgroundColor.replaceAll(" ", "")) {
                resultBtn.textContent = "SUCCESS";
                resultBtn.classList.remove("btn-warning");
                resultBtn.classList.add("btn-success");
            } else {
                resultBtn.textContent = "FAILED";
                resultBtn.classList.remove("btn-warning");
                resultBtn.classList.add("btn-danger");
            }
            gameLogic = false;
        }
    });
})