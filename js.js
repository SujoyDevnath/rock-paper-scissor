// preloader function handling
window.onload = function () {
    document.getElementById('pre-loader').style.display = 'none';
}
// 1 = rock; 2 = paper; 3 = scissor;

///////////////////////////////
// random number generating //
/////////////////////////////
let previousRandom = 0;
function generateRandomNumber() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == previousRandom) {
        return generateRandomNumber();
    }
    previousRandom = random;
    return random;
}
let counter = 0;

/////////////////////////
// main game function //
///////////////////////
function game(userInput) {
    // all game variable list
    const randomNumber = generateRandomNumber();
    const cpuPrev = document.getElementById('cpu-prev');
    const userPrev = document.getElementById('user-prev');
    const cpuPointId = document.getElementById('cpu-point');
    const cpuPointText = cpuPointId.innerText;
    let cpuPoint = parseInt(cpuPointText);
    const userPointId = document.getElementById('user-point');
    const userPointText = userPointId.innerText;
    let userPoint = parseInt(userPointText);

    // removeAdd() function to short the code
    function removeAdd(source, remove1, remove2, remove3, add) {
        source.classList.remove(remove1);
        source.classList.remove(remove2);
        source.classList.remove(remove3);
        source.classList.add(add);
    }

    // random number preview
    if (randomNumber == 1) {
        removeAdd(cpuPrev, 'fa-chess-rook', 'fa-hand-paper', 'fa-hand-scissors', 'fa-hand-rock');
    } else if (randomNumber == 2) {
        removeAdd(cpuPrev, 'fa-chess-rook', 'fa-hand-rock', 'fa-hand-scissors', 'fa-hand-paper');
    } else if (randomNumber == 3) {
        removeAdd(cpuPrev, 'fa-chess-rook', 'fa-hand-paper', 'fa-hand-rock', 'fa-hand-scissors');
    }
    // user input preview
    if (userInput == 1) {
        removeAdd(userPrev, 'fa-chess-rook', 'fa-hand-paper', 'fa-hand-scissors', 'fa-hand-rock');
    } else if (userInput == 2) {
        removeAdd(userPrev, 'fa-chess-rook', 'fa-hand-rock', 'fa-hand-scissors', 'fa-hand-paper');
    } else if (userInput == 3) {
        removeAdd(userPrev, 'fa-chess-rook', 'fa-hand-paper', 'fa-hand-rock', 'fa-hand-scissors');
    }

    // win calculation
    if (randomNumber == 1 && userInput == 2) {
        userPoint = userPoint + 1;
        userPointId.innerText = userPoint;
        counter = counter + 1;

    } else if (randomNumber == 3 && userInput == 1) {
        userPoint = userPoint + 1;
        userPointId.innerText = userPoint;
        counter = counter + 1;
    } else if (randomNumber == 2 && userInput == 3) {
        userPoint = userPoint + 1;
        userPointId.innerText = userPoint;
        counter = counter + 1;
    } else if (randomNumber == userInput) {
        userPointId.innerText = userPoint;
    } else {
        cpuPoint = cpuPoint + 1;
        cpuPointId.innerText = cpuPoint;
        counter = counter + 1;
    };
    function beginingValue() {
        cpuPoint = 0;
        cpuPointId.innerText = 0;
        userPointId.innerText = 0;
        counter = 0;
        cover('block');

    }
    // justifying winner
    if (counter == 5) {
        if (cpuPoint < userPoint) {
            alert('congratulations!! You won the match\nYour Score : ' + userPoint + '\nCPU Score : ' + cpuPoint);
        } else if (cpuPoint > userPoint) {
            alert('hahaha... You are a looser\nYour Score : ' + userPoint + '\nCPU Score : ' + cpuPoint);
        } else {
            alert('The match is draw. Let\'s play again\nYour Score : ' + userPoint + '\nCPU Score : ' + cpuPoint);
        }
        beginingValue();
    }
};
////////////////////////////////
// cover page event handling //
//////////////////////////////
// document.getElementById('cover-button').addEventListener('click', function () {
//     document.getElementById('cover-page').style.display = 'none';
// })
function cover(value) {
    let coverPage = document.getElementById('cover-page');
    coverPage.style.display = value;
}

////////////////////////////////
// font click event handling //
//////////////////////////////
const iTags = document.getElementsByClassName('logo');
for (const iTag of iTags) {
    iTag.addEventListener('click', function (event) {
        event.stopPropagation();
        const userInput = event.target.parentNode.value;
        game(userInput);
    });
}
//////////////////////////////////
// button click event handling //
////////////////////////////////
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const userInput = event.target.value;
        game(userInput);
    })
}