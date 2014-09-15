(function () {
    //The main variables currentSign, which monitors when to print X and when O
    //and turnsCount, which monitors how many turns have been made and if there is no winner, the game ends
    var currentSign = "X";
    var turnsCount = 0;

    //Setting every box from the game board to its own variable for easier later use
    var a1Box = document.getElementById("a1");
    var a2Box = document.getElementById("a2");
    var a3Box = document.getElementById("a3");
    var b1Box = document.getElementById("b1");
    var b2Box = document.getElementById("b2");
    var b3Box = document.getElementById("b3");
    var c1Box = document.getElementById("c1");
    var c2Box = document.getElementById("c2");
    var c3Box = document.getElementById("c3");

    //Setting every row with its own variable
    var row1 = [a1Box, a2Box, a3Box];
    var row2 = [b1Box, b2Box, b3Box];
    var row3 = [c1Box, c2Box, c3Box];

    //Satting array of every row in the game board
    var rows = [row1, row2, row3];

    //Initialises the game data and starting the game
    Init();

    function Init() {
        //Init() adds click event to every single box on the board
        rows[0][0].onclick = function () { Animate(0, 0, currentSign) };
        rows[0][1].onclick = function () { Animate(0, 1, currentSign) };
        rows[0][2].onclick = function () { Animate(0, 2, currentSign) };
        rows[1][0].onclick = function () { Animate(1, 0, currentSign) };
        rows[1][1].onclick = function () { Animate(1, 1, currentSign) };
        rows[1][2].onclick = function () { Animate(1, 2, currentSign) };
        rows[2][0].onclick = function () { Animate(2, 0, currentSign) };
        rows[2][1].onclick = function () { Animate(2, 1, currentSign) };
        rows[2][2].onclick = function () { Animate(2, 2, currentSign) };
    };

    function Animate(row, col, currentSign) {
        //Animate is the games "core". When the user makes a turn it checks if this current move  wins the game or ends the turn
        //and if the game is brough to its end, it renders the result
        CheckPosition(row, col, currentSign);
        GameEnder(turnsCount);
    }

    function CheckPosition(row, col, currSign) {
        //Checks the current position and if it is free, it prints the current symbol. After that it changes the symbol
        var inner = rows[row][col].innerText;
        if (inner == "") {

            if (currentSign === "X") {
                rows[row][col].innerText = currentSign;
                currentSign = "O";
            }
            else {
                rows[row][col].innerText = currentSign;
                currentSign = "X";
            }

            turnsCount++;
        }

    }

    function GameEnder(turns) {
        //Checks if there are three of a kind in a same row
        if (rows[0][0].innerHTML == rows[0][1].innerHTML && rows[0][0].innerHTML == rows[0][2].innerHTML && rows[0][0].innerHTML != "") {
            console.log("row 1 wins " + rows[0][0].innerHTML);
            PaintBoxes(rows[0][0], rows[0][1], rows[0][2]);
            ShowResult(rows[0][0].innerHTML);
            Disarm();
        }

        else if (rows[1][0].innerHTML == rows[1][1].innerHTML && rows[1][0].innerHTML == rows[1][2].innerHTML && rows[1][1].innerHTML != "") {
            console.log("rows 2 wins " + rows[1][1].innerHTML);
            PaintBoxes(rows[1][0], rows[1][1], rows[1][2]);
            ShowResult(rows[1][0].innerHTML);
            Disarm();
        }

        else if (rows[2][0].innerHTML == rows[2][1].innerHTML && rows[2][0].innerHTML == rows[2][2].innerHTML && rows[2][1].innerHTML != "") {
            console.log("row 3 wins " + rows[2][1].innerHTML);
            PaintBoxes(rows[2][0], rows[2][1], rows[2][2]);
            ShowResult(rows[2][0].innerHTML);
            Disarm();
        }

        //Checks if there are three of a kind in a same column
        else if (rows[0][0].innerHTML == rows[1][0].innerHTML && rows[0][0].innerHTML == rows[2][0].innerHTML && rows[0][0].innerHTML != "") {
            console.log("left vertical wins");
            PaintBoxes(rows[0][0], rows[1][0], rows[2][0]);
            ShowResult(rows[0][0].innerHTML);
            Disarm();
        }

        else if (rows[0][1].innerHTML == rows[1][1].innerHTML && rows[1][1].innerHTML == rows[2][1].innerHTML && rows[2][1].innerHTML != "") {
            console.log("middle vertical wins " + rows[1][1].innerHTML);
            PaintBoxes(rows[0][1], rows[1][1], rows[2][1]);
            ShowResult(rows[0][1].innerHTML);
            Disarm();
        }

        else if (rows[0][2].innerHTML == rows[1][2].innerHTML && rows[0][2].innerHTML == rows[2][2].innerHTML && rows[0][2].innerHTML != "") {
            console.log("right vertical wins");
            PaintBoxes(rows[0][2], rows[1][2], rows[2][2]);
            ShowResult(rows[0][2].innerHTML);
            Disarm();
        }

        //Checks if there are three of a kind in a diagonal
        else if (rows[0][0].innerHTML == rows[1][1].innerHTML && rows[0][0].innerHTML == rows[2][2].innerHTML && rows[0][0].innerHTML != "") {
            console.log("left diagonal wins");
            PaintBoxes(rows[0][0], rows[1][1], rows[2][2]);
            ShowResult(rows[0][0].innerHTML);
            Disarm();
        }

        else if (rows[0][2].innerHTML == rows[1][1].innerHTML && rows[1][1].innerHTML == rows[2][0].innerHTML && rows[0][2].innerHTML != "") {
            console.log("right diagonal wins");
            PaintBoxes(rows[0][2], rows[1][1], rows[2][0]);
            ShowResult(rows[0][2].innerHTML);
            Disarm();
        }
        else {
            if (turns == 9) {
                ShowResultIfEven();
            }
        }
    }


    function Disarm() {
        //Removes the onclick event when the game is finished. After Disarm() is called the user is not able to do more moves
        rows[0][0].onclick = null;
        rows[0][1].onclick = null;
        rows[0][2].onclick = null;
        rows[1][0].onclick = null;
        rows[1][1].onclick = null;
        rows[1][2].onclick = null;
        rows[2][0].onclick = null;
        rows[2][1].onclick = null;
        rows[2][2].onclick = null;
    }

    function PaintBoxes(boxA, boxB, boxC) {
        //Paints the winning three boxes
        boxA.style.backgroundColor = "#C7C7C7";
        boxB.style.backgroundColor = "#C7C7C7";
        boxC.style.backgroundColor = "#C7C7C7";
    }

    function ShowResult(str) {
        //Prints the result if there are three of a kind found
        var box = document.getElementById("winPanel");

        box.innerHTML = "\"" + str + "\" WINS!";
    }

    function ShowResultIfEven() {
        //Prints the result if there is no winner, but the maximum number of turns are made
        var box = document.getElementById("winPanel");

        box.innerHTML = "GAME IS EVEN!";
    }
})();