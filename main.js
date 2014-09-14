(function () {
    var currentSign = "X";
    var turnsCount = 0;

    var a1Box = document.getElementById("a1");
    var a2Box = document.getElementById("a2");
    var a3Box = document.getElementById("a3");
    var b1Box = document.getElementById("b1");
    var b2Box = document.getElementById("b2");
    var b3Box = document.getElementById("b3");
    var c1Box = document.getElementById("c1");
    var c2Box = document.getElementById("c2");
    var c3Box = document.getElementById("c3");

    var row1 = [a1Box, a2Box, a3Box];
    var row2 = [b1Box, b2Box, b3Box];
    var row3 = [c1Box, c2Box, c3Box];

    var rows = [row1, row2, row3];

    Init();

    function Init() {
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
        CheckPosition(row, col, currentSign);
        GameEnder(turnsCount);
    }


    function CheckPosition(row, col, currSign) {
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
        if (turns == 9) {
            console.log("GAME OVER!"); //TODO
        }
        else {
            if (rows[0][0].innerHTML == rows[0][1].innerHTML && rows[0][0].innerHTML == rows[0][2].innerHTML && rows[0][0].innerHTML != "") {
                console.log("row 1 wins " + rows[0][0].innerHTML);
            }

            else if (rows[1][0].innerHTML == rows[1][1].innerHTML && rows[1][0].innerHTML == rows[1][2].innerHTML && rows[1][1].innerHTML != "") {
                console.log("rows 2 wins " + rows[1][1].innerHTML);
            }

            else if (rows[2][0].innerHTML == rows[2][1].innerHTML && rows[2][0].innerHTML == rows[2][2].innerHTML && rows[2][1].innerHTML != "") {
                console.log("row 3 wins " + rows[2][1].innerHTML);
            }


            //TO DO vertical and diagonal
        }
    }
})();