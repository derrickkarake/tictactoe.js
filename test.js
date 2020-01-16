//var prompt = require('prompt');                       // imported to help with user input
var prompt = require("prompt-sync").prompt;
//var computerPlayer = false; 

var board = { 1: ' ', 2: ' ', 3: ' ',                 // holds the numbers input by the user or AI
              4: ' ', 5: ' ', 6: ' ',
              7: ' ', 8: ' ', 9: ' '
};

// this function marks the position on the board with the input number
function markBoard(position, mark)                 
    {
        board[position] = mark.toUpperCase();
    }

function printBoard() {
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}   


function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function validateMove(position) {
    return (isInt(position) && board[position] === ' ')
}

var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];


function checkWin(player) {
    var i, j, markCount
    for (i = 0; i < winCombinations.length; i++) {
        markCount = 0;
        for (j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function checkTie() {
    for (var i = 1; i <= Object.keys(board).length; i++) {
        if (board[i] === ' ') {
            return false;
        }
    }
    return true;
}

function playTurn(player) {
   
    //console.log(name); 
    if (player === 'X'){
        gotoName = name1
    } else {
        gotoName = name2
    }

    console.log('Your turn player: ' + gotoName);
    position = prompt();
    //prompt.get(['position'], function (err, result) {

        if (validateMove(position) === true) 
        {
            markBoard(position, player);
            printBoard();
            if (checkWin(player) === true) 
            {
                console.log(gotoName + ' is the Winner!');
                replayGame ();
            }
            if (checkTie() === true) 
            {
                console.log('Tie Game');
                replayGame ();
            }
            if (typeGame !== '2')
            {
                if (player === 'X') 
                {
                    playTurn('O');
                } 
                else 
                {
                    playTurn('X');
                }
            }
            else{
                if (player === 'O') 
                {
                    computerMove('X');
                } 
                else 
                {
                    playTurn('O');
                }
            }
        } 
        
        else {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    
}

function computerMove (player)
{
    if (player === 'X'){
        gotoName = name1
   } else {
       gotoName = name2
   }
    console.log("computer's turn to play ");
    position = Math.floor(Math.random() * 9) + 1;

        if (validateMove(position) === true) {
            markBoard(position, player);
            printBoard();
            if (checkWin(player) === true) {
                console.log(gotoName + ' is the Winner!');
                replayGame ();
            }
            if (checkTie() === true) {
                console.log('Tie Game');
                replayGame ();
            }
            if (player === 'X') {
                playTurn('O');
            } else {
                computerMove('X');
            }
        } else {
            //console.log('incorrect input please try again...');
            computerMove(player);
        }
      
}
 
function startGame ()
{

    board = { 1: ' ', 2: ' ', 3: ' ',                 // holds the numbers input by the user or AI
                  4: ' ', 5: ' ', 6: ' ',
                  7: ' ', 8: ' ', 9: ' '};
    showMoves();
    if (typeGame === '2')
{
    computerMove ('X')
}else
    playTurn('X');
}

console.log("Do you want a [1]human opponent or [2]computer opponent? [1 or 2]");
var typeGame = prompt(); 

if (typeGame === '2')
{
    console.log(" player X is computer")
    console.log(" What's your name player O ?")
    var name2 = prompt(); 
    var name1 ='computer';
    //computerPlayer = true;
    showMoves();  
    computerMove ('X')
}
else 
{
    console.log(" what's your name Player 1")
     name1 = prompt();
    console.log("what's yout name player 2")
    name2 = prompt();

    console.log (name1 + " is X and " + name2 + " is O")

    showMoves(); 
    playTurn('X'); 
}
function replayGame ()
{
    console.log("do you want to play again answer 'y' or 'n'");
    var playAgain = prompt();

    if ( playAgain === 'y')
    {
        startGame (); 

    }
    else if (playAgain === 'n')
    {
        return process.exit(1); 
    }
    else
    {
        console.log("invalid input please answer 'y' or 'n'")
        replayGame (); 
    }

}
function showMoves ()
{
console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');
} 

//startGame(); 
