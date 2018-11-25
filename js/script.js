"use strict";
(function () {
    var info = document.getElementById("output");
    var score = document.getElementById("result");
    var myLog = document.getElementById("log-info")
    var buttonShears = document.getElementById("first");
    var buttonStone = document.getElementById("second");
    var buttonPaper = document.getElementById("third");
    var buttonStart = document.getElementById("start");
    var elements = ["paper", "stone", "shears"];
    var roundCounter;
    var userName;
    var userCounter;
    var compCounter;
    var check = false;

    var prepareGame = function() {
        userCounter = 0;
        compCounter = 0;
        check = true;
        userName = window.prompt("Enter your name:");
        roundCounter = window.prompt("Enter quantity of round:");
        buttonStart.classList.toggle("hidden");
        showScore();
        info.innerHTML = "select the button";
    }

    var showLog = function(info) {
        myLog.innerHTML = info;
    }

    var endGame = function() {
        check = false;
        buttonStart.classList.toggle("hidden");
        if (userCounter > compCounter) {
            info.innerHTML = "YOU WON THE ENTIRE GAME!!!";
        } else if (userCounter < compCounter) {
            info.innerHTML = "YOU LOST THE ENTIRE GAME!!!";
        } else {
            info.innerHTML = "DRAW";
        }
        showLog("GAME OVER");
    }

    var showScore = function() {
        score.innerHTML = userName + "(" + userCounter + ") vs (" + compCounter + ")Computer";
        showLog("remaining rounds: <strong>" + roundCounter + "</strong>");
    }

    var randomCompChoice = function() {
        return Math.round((Math.random()) * 2);
    }

    var showInfo = function(userNumber, compNumber, checkScore) {
        var answers = ["you won", "computer won", "draw"];
        var answer = ": you played " + elements[userNumber].toUpperCase() + ", computer played " + elements[compNumber].toUpperCase();

        if (checkScore == "you") {
            info.innerHTML = answers[0].toUpperCase() + answer;
        } else if (checkScore == "comp") {
            info.innerHTML = answers[1].toUpperCase() + answer;
        } else {
            info.innerHTML = answers[2].toUpperCase() + answer;
        }
    }

    var playerMove = function(userChoice) {
        var compChoice = randomCompChoice();

        if (userChoice == 0 && compChoice == 1) {
            showInfo(userChoice, compChoice, "you");
            userCounter ++;
        } else if (userChoice == 0 && compChoice == 2) {
            showInfo(userChoice, compChoice, "comp");
            compCounter ++;
        } else if (userChoice == 1 && compChoice == 2) {
            showInfo(userChoice, compChoice, "you");
            userCounter ++;
        } else if (userChoice == 1 && compChoice == 0) {
            showInfo(userChoice, compChoice, "comp");
            compCounter ++;
        } else if (userChoice == 2 && compChoice == 0) {
            showInfo(userChoice, compChoice, "you");
            userCounter ++;
        } else if (userChoice == 2 && compChoice == 1) {
            showInfo(userChoice, compChoice, "comp");
            compCounter ++;
        } else {
            showInfo(userChoice, compChoice, "draw")
        }
        roundCounter --;
        if (roundCounter > 0) {
            showScore();
        } else {
            endGame();
        }
    }

    buttonShears.addEventListener("click", function() {
        if (check) {
            playerMove(0);
        } else {
            showLog("Game over, please press the new game button!");
        }
    });

    buttonStone.addEventListener("click", function() {
        if (check) {
            playerMove(1);
        } else {
            showLog("Game over, please press the new game button!");
        }
    });

    buttonPaper.addEventListener("click", function() {
        if (check) {
            playerMove(2);
        } else {
            showLog("Game over, please press the new game button!");
        }
    });

    buttonStart.addEventListener("click", function() {
        prepareGame();
    })

})();