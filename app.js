// Query select into a var all tile div's

// ========================================================== //
// ====================== DOM ELEMENTS ====================== //
// ========================================================== //

// Query select into a var listeners to span's and p's of the bottom menu that will display messages
// Set variables like score and player turn

const tiles = document.querySelectorAll('.game-grid > div')
const mainHeading = document.querySelector('.main-heading')
const subHeading = document.querySelector('.sub-heading')
const resetBtn = document.querySelector('#reset-btn')
const alertMsg = document.querySelector('.alert-messages')
const blueScoreboard = document.querySelector('.blue-score')
const redScoreboard = document.querySelector('.red-score')
// TURN VARS
var currentPlayersTurn = "red-player"
var blueScore = 0
var redScore = 0
// WINNER LOSER VARS
var isThereWinner = false
var winner = ""
var loser = ""


// ========================================================== //
// ======================+ GAME LOGIC +====================== //
// ========================================================== //

// Logc layout for game
// Figure out a way to run conditional tests for winner.. needs to be a function to checkWinner()
// after each player has selected a tile change the color scheme of that tile
// &&
// after the player has selected the tile change to the next player's turn, using CSS change the button selector
// also display a message showing who's turn it is 
// &&
// e.g. if 3 successive tiles then show winner message and some glow effect on those tiles?
// TEST: If 3 tiles in a row, column or diagonal add to 15 -> we have a winner?
// Figure out some scoring system that allows us to tally and determine a winner for selections

const checkWinner = (player) => {
    // TEST ROWS
    if ((tiles[0].classList.contains(player)) && (tiles[1].classList.contains(player)) && (tiles[2].classList.contains(player))) {
        isThereWinner = true;
    } else if ((tiles[3].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[5].classList.contains(player))) {
        isThereWinner = true;
    } else if ((tiles[6].classList.contains(player)) && (tiles[7].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true;
    }
    // TEST COLUMNS 
    if ((tiles[0].classList.contains(player)) && (tiles[3].classList.contains(player)) && (tiles[6].classList.contains(player))) {
        isThereWinner = true;
    } else if ((tiles[1].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[7].classList.contains(player))) {
        isThereWinner = true;
    } else if ((tiles[2].classList.contains(player)) && (tiles[5].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true;
    }
    // TEST DIAGONAL
    if ((tiles[0].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true;
    } else if ((tiles[6].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[2].classList.contains(player))) {
        isThereWinner = true;
    }
    // ASSIGN WINNER 
    if (isThereWinner) {
        winner = currentPlayersTurn
    }
    // ASSIGN LOSER 
    if (winner === "red-player") {
        loser = "blue-player"
    } else {
        loser = "red-player"
    }
}

const turnHandler = () => {
    if (currentPlayersTurn === "blue-player") {
        event.target.classList.add('blue-player')
        checkWinner(currentPlayersTurn)
        currentPlayersTurn = "red-player"
        // insert a message for current players turn 
    } else {
        event.target.classList.add('red-player');
        checkWinner(currentPlayersTurn)
        currentPlayersTurn = "blue-player";
    }
    if (isThereWinner) {

        disableBoard()
    } else {
        // message game over 
    }
}

const disableBoard = () => {
    // disable all the button functionalities and add animations, messages, etc. 
}

// ========================================================== //
// ==================++ EVENT LISTENERS ++=================== //
// ========================================================== //

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', turnHandler)
}

// What event listeners/ handlers do I need to setip to get things working!
