function diceRoller() {
    var player1Num = Math.floor((Math.random() * 6 )+ 1);
    var player2Num = Math.floor((Math.random() * 6 )+ 1);

    if(player1Num === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (player1Num === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (player1Num === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");    
    } else if (player1Num === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (player1Num === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else if (player1Num === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    if(player2Num === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (player2Num === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (player2Num === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");    
    } else if (player2Num === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (player2Num === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else if (player2Num === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }

    if(player2Num < player1Num) {
        document.querySelector("h1").innerText = "Player 1 Wins! 🥇";
    } else if (player2Num > player1Num) {
        document.querySelector("h1").innerText = "Player 2 Wins! 🏆";
    } else {
        document.querySelector("h1").innerText = "Draw 🙉";
    }


}
