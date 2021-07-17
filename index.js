//Initializing Counts
var rollCount = 0;
var flipCount = 0;

var player1Count = 0;
var player2Count = 0;
var drawCount = 0;

var headsCount = 0;
var tailsCount = 0;

function diceRoller() {
    var player1Num = Math.floor((Math.random() * 6 )+ 1); //Random number for Player 1
    var player2Num = Math.floor((Math.random() * 6 )+ 1); //Random number for Player 2

    var player1Img = "images/dice" + player1Num + ".png";
    var player2Img = "images/dice" + player2Num + ".png";

    document.querySelector(".img1").setAttribute("src", player1Img); //Setting the image
    document.querySelector(".img2").setAttribute("src", player2Img);

    if(player2Num < player1Num) {
        document.querySelector("#h1Dice").innerText = "🥇 Player 1 Wins!";
        player1Count+=1;
        document.querySelector(".player1Count").innerText = player1Count;
    } else if (player2Num > player1Num) {
        document.querySelector("#h1Dice").innerText = "Player 2 Wins! 🏆";
        player2Count+=1;
        document.querySelector(".player2Count").innerText = player2Count;
    } else {
        document.querySelector("#h1Dice").innerText = "Draw 🙉";
        drawCount+=1;
        document.querySelector(".drawCount").innerText = drawCount;
    }

    rollCount+=1;
    document.querySelector(".rollCount").innerText = rollCount;

}

function flipCoin(){
    var flipCoinNum = Math.floor((Math.random() * 2) + 1);
    
    document.querySelector(".coin").setAttribute("src", "images/coin" + flipCoinNum + ".jpg");

    if (flipCoinNum === 1) {
        document.querySelector("#h1Coin").innerText = "Heads! 👶🏻";
        headsCount+=1;
        document.querySelector(".headsCount").innerText = headsCount;
    } else {
        document.querySelector("#h1Coin").innerText = "Tails! 🍤";
        tailsCount+=1;
        document.querySelector(".tailsCount").innerText = tailsCount;
    }

    flipCount+=1;
    document.querySelector(".flipCount").innerText = flipCount;
}

function resetRoll(){
    player1Count = 0;
    player2Count = 0;
    drawCount = 0;
    rollCount = 0;

    document.querySelector(".player1Count").innerText = player1Count;
    document.querySelector(".player2Count").innerText = player2Count;
    document.querySelector(".drawCount").innerText = drawCount;
    document.querySelector(".rollCount").innerText = rollCount;

    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    
    document.querySelector("#h1Dice").innerText = "Dice Roller";
}

function resetFlip(){
    headsCount = 0;
    tailsCount = 0;
    flipCount = 0;

    document.querySelector(".headsCount").innerText = headsCount;
    document.querySelector(".tailsCount").innerText = tailsCount;
    document.querySelector(".flipCount").innerText = flipCount;

    document.querySelector(".coin").setAttribute("src", "images/coin1.jpg");
    
    document.querySelector("#h1Coin").innerText = "Heads or tails?";
}
