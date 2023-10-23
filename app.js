console.log(" Welcome Tic Tac Toe");

// background Music 
let music = new Audio("Assets/music.mp3")
let audioTurn = new Audio("Assets/turn.mp3")
let gameOver = new Audio("Assets/gameOver.mp3")
let turns ="X";
let isgameover = false;

// function to change the turn 

const changeTurn = () =>{
    return turns === "X"? "0": "X"
}

// function to check for win 
const chechWin = () => {
    let boxTexts = document.getElementsByClassName('boxText')
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e => {
    if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText)) && (boxTexts[e[0]].innerText !== '') ){
        document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " " + "won"
        isgameover = true;
    }
})
}


// Game Logic 
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText === ''){
            boxText.innerText = turns;
           turns = changeTurn();
            audioTurn.play();
            chechWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turns for " + turns; 
            }
        }
    })
})
