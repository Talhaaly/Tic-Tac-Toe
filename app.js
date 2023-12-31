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
    [0,1,2, 5,5,0],
    [3,4,5, 5,15,0],
    [6,7,8, 5,25,0],
    [0,3,6, -5,15,90],
    [1,4,7, 5,15,90],
    [2,5,8, 15,15,90],
    [0,4,8, 5,15,45],
    [2,4,6, 5,15,135]
]
wins.forEach(e => {
    if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText)) && (boxTexts[e[0]].innerText !== '') ){
        document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " " + "won"
        isgameover = true;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector('.line').style.width = "25vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
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


// Add Listener onclock reset button
reset.addEventListener('click', () =>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText) .forEach(element => {
        element.innerText = ""
    });
    turns = "X"
    isgameover = false;
    gameOver.play();
    document.querySelector('.line').style.width = "0";
    document.getElementsByClassName('info')[0].innerText = "Turn For" + turns;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})