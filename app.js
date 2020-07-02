// Query select into a var all tile div's

// ========================================================== //
// =============== DOM ELEMENTS & /G VARIABLES ============== //
// ========================================================== //

// Query select into a var listeners to span's and p's of the bottom menu that will display messages
// Set variables like score and player turn

const tiles = document.querySelectorAll('.game-grid > div')
const gameHeading = document.querySelector('.game-heading')
const subHeading = document.querySelector('.sub-heading')
const resetBtn = document.querySelector('#reset-btn')
const alertMsg = document.querySelector('.alert-messages')
const blueScoreboard = document.querySelector('.blue-score')
const redScoreboard = document.querySelector('.red-score')
const botButton = document.querySelector('.bot-icon')
var selectedTiles = []
var initBotClicked = false;
var currentPlayersTurn = "red-player"
var blueScore = 0
var redScore = 0
var isThereWinner = false
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
        isThereWinner = true
        tiles[0].classList.add(`${player}-glow`)
        tiles[1].classList.add(`${player}-glow`)
        tiles[2].classList.add(`${player}-glow`)
    } else if ((tiles[3].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[5].classList.contains(player))) {
        isThereWinner = true
        tiles[3].classList.add(`${player}-glow`)
        tiles[4].classList.add(`${player}-glow`)
        tiles[5].classList.add(`${player}-glow`)
    } else if ((tiles[6].classList.contains(player)) && (tiles[7].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true
        tiles[6].classList.add(`${player}-glow`)
        tiles[7].classList.add(`${player}-glow`)
        tiles[8].classList.add(`${player}-glow`)
    }
    // TEST COLUMNS 
    if ((tiles[0].classList.contains(player)) && (tiles[3].classList.contains(player)) && (tiles[6].classList.contains(player))) {
        isThereWinner = true
        tiles[0].classList.add(`${player}-glow`)
        tiles[3].classList.add(`${player}-glow`)
        tiles[6].classList.add(`${player}-glow`)
    } else if ((tiles[1].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[7].classList.contains(player))) {
        isThereWinner = true
        tiles[1].classList.add(`${player}-glow`)
        tiles[4].classList.add(`${player}-glow`)
        tiles[7].classList.add(`${player}-glow`)
    } else if ((tiles[2].classList.contains(player)) && (tiles[5].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true
        tiles[2].classList.add(`${player}-glow`)
        tiles[5].classList.add(`${player}-glow`)
        tiles[8].classList.add(`${player}-glow`)
    }
    // TEST DIAGONAL
    if ((tiles[0].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[8].classList.contains(player))) {
        isThereWinner = true
        tiles[0].classList.add(`${player}-glow`)
        tiles[4].classList.add(`${player}-glow`)
        tiles[8].classList.add(`${player}-glow`)
    } else if ((tiles[6].classList.contains(player)) && (tiles[4].classList.contains(player)) && (tiles[2].classList.contains(player))) {
        isThereWinner = true
        tiles[6].classList.add(`${player}-glow`)
        tiles[4].classList.add(`${player}-glow`)
        tiles[2].classList.add(`${player}-glow`)
    }
    // ASSIGN AND LOSER
    assignWinnerLoser()
    // CHECK FOR DRAW
    checkDraw()
}

const assignWinnerLoser = () => {
    // ASSIGNING WINNER
    if (isThereWinner) {
        gameWinner = currentPlayersTurn
        // printing winner to the heading..
        let winnerArr = []
        winnerArr = gameWinner.split('-')
        let winningPlayerH1 = winnerArr[0]
        gameHeading.textContent = `${winningPlayerH1} wins!`
        disableBoard()
        setTimeout(confetti({
            origin: {
                x: 0.5,
                y: 1.,
            }
        }), 1000)
    }
    // ASSIGNING LOSER 
    if (gameWinner === "red-player") {
        redScore += 1
        redScoreboard.textContent = redScore
        gameLoser = "blue-player"
    } else if (gameWinner === "blue-player") {
        blueScore += 1
        blueScoreboard.textContent = blueScore
        gameLoser = "red-player"
    }
}

const checkDraw = () => {
    var tileCount = 0
    var totalTiles = tiles.length
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].classList.contains('blue-player') || tiles[i].classList.contains('red-player')) {
            tileCount++
        }
        if (totalTiles === tileCount) {
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].removeEventListener('click', turnHandler)
            }
            alertMsg.textContent = "It's a draw"
            // it's a draw.. print the appropriate messages and animations 
        }
    }
}

// how to stop someone from spamming the others turn when it is bot's turn 
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
        setTimeout(runBot, 2000)
    }
    if (event.target.classList.contains('blue-player') || event.target.classList.contains('red-player')) {
        event.target.removeEventListener('click', turnHandler)
    }
}

const disableBoard = () => {
    // disable all the tile functionalities and add animations, messages, etc. 
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('click', turnHandler)
        if (!tiles[i].classList.contains(gameWinner)) {
            tiles[i].className = "tile-reset"
        } else {
            // add appropriate animations when it is a draw... 
            alertMsg.textContent = "Reset to start again :)"
        }
    }
}

const resetBoard = () => {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].className = "tile"
        tiles[i].classList.add('tile-dwn')
        alertMsg.textContent = "Board has been reset"
        gameHeading.textContent = "Pick15"
        isThereWinner = false
    }
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', turnHandler)
    }
    gameWinner = ""
    gameLoser = ""
    // Qns need to somehow reset the checkDraw tileCounter that is locally scoped so after reset there can draw again 

}

// ========================================================== //
// ==================++ EVENT LISTENERS ++=================== //
// ========================================================== //

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', turnHandler)
}

resetBtn.addEventListener('click', resetBoard)


// ========================================================== //
// ==================+++ BOT FUNCTIONS +++=================== //
// ========================================================== //

// make an array to store the tiles that have been clicked and update as players make their move

const initBot = () => {
    initBotClicked = true
}
const runBot = () => {
    // let turnArr = []
    // for (let i = 0; i < tiles.length; i++) {
    //     if (!tiles[i].classList.contains('blue-player') && !tiles[i].classList.contains('red-player')) {
    //         turnArr = tiles[i].dataset.index
    //     }
    // }

    // get a numbered array via phillipes method
    let botBoard = Array.from(tiles);
    let mappedBoard = botBoard.map(function (move) {
        return move.dataset.index;
    });
    console.log(mappedBoard)

    // let randomTile = Math.floor(Math.random() * tilesCounter)
    // if (initBotClicked === true && currentPlayersTurn === 'blue-player') {
    //     tiles[randomTile].click()
    // }
}
botButton.addEventListener('click', initBot)
