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
var currentPlayersTurn = "red-player"
var blueScore = 0
var redScore = 0
var isTheregameWinner = false
var gameWinner = ""
var gameLoser = ""


// ========================================================== //
// ======================+ GAME LOGIC +====================== //
// ========================================================== //

// Logc layout for game
// Figure out a way to run conditional tests for gameWinner.. needs to be a function to checkWinner()
// after each player has selected a tile change the color scheme of that tile
// &&
// after the player has selected the tile change to the next player's turn, using CSS change the button selector
// also display a message showing who's turn it is 
// &&
// e.g. if 3 successive tiles then show gameWinner message and some glow effect on those tiles?
// TEST: If 3 tiles in a row, column or diagonal add to 15 -> we have a gameWinner?
// Figure out some scoring system that allows us to tally and determine a gameWinner for selections

const checkWinner = (player) => {
    // TEST ROWS // any way to include less brackets??
    if ((tiles[0].classList.contains(player)) && (tiles[1].classList.contains(player)) && (tiles[2].classList.contains(player))) {
        isTheregameWinner = true
    } else if ((tiles[3].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[5].classList.contains(player))) {
        isTheregameWinner = true
    } else if ((tiles[6].classList.contains(player)) && (tiles[7].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isTheregameWinner = true
    }
    // TEST COLUMNS 
    if ((tiles[0].classList.contains(player)) && (tiles[3].classList.contains(player)) && (tiles[6].classList.contains(player))) {
        isTheregameWinner = true
    } else if ((tiles[1].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[7].classList.contains(player))) {
        isTheregameWinner = true
    } else if ((tiles[2].classList.contains(player)) && (tiles[5].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isTheregameWinner = true
    }
    // TEST DIAGONAL
    if ((tiles[0].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isTheregameWinner = true
    } else if ((tiles[6].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[2].classList.contains(player))) {
        isTheregameWinner = true
    }
    // ASSIGN WINNER 
    if (isTheregameWinner) {
        gameWinner = currentPlayersTurn
        alertMsg.textContent = "We have a winner!"
    }
    // ASSIGN LOSER 
    if (gameWinner === "red-player") {
        redScore += 1
        redScoreboard.textContent = redScore
        gameLoser = "blue-player"
    } else {
        blueScore += 1
        blueScoreboard.textContent = redScore
        gameLoser = "red-player"
    }
    // CHECK FOR DRAW
    checkDraw()
}

// 6pm make sure the draw function works?! 
const checkDraw = () => {
    var tileCount = 0
    var totalTiles = tiles.length
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].classList.contains('blue-player') || tiles[i].classList.contains('red-player')) {
            tileCount++
        }
        if (totalTiles === tileCount) {
            console.log('its a draw')
            // it's a draw.. print the appropriate messages and animations 
        }
    }
}

const turnHandler = () => {
    if (currentPlayersTurn === "blue-player") {
        event.target.classList.add('blue-player')
        alertMsg.textContent = "Red, its your turn!"
        checkWinner(currentPlayersTurn)
        currentPlayersTurn = "red-player"
        // insert a message for current players turn 
    } else {
        event.target.classList.add('red-player')
        alertMsg.textContent = "Blue, go go go!"
        checkWinner(currentPlayersTurn)
        currentPlayersTurn = "blue-player"
    }
    if (isTheregameWinner) {
        disableBoard()
        // enter message for game winner.. print appropriate messages and animations
    }
}

const disableBoard = () => {
    // disable all the tile functionalities and add animations, messages, etc. 
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('click', turnHandler)
        if (!tiles[i].classList.contains(gameWinner)) {
            tiles[i].className = "tile-reset"
        }
    }
}

// ========================================================== //
// ==================++ EVENT LISTENERS ++=================== //
// ========================================================== //

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', turnHandler)
}

// What event listeners/ handlers do I need to setip to get things working!
