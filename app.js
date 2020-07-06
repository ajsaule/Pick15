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
var randomBotClicked = false;
var cleverBotClicked = false;
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
        if (blueScore === 2 || redScore === 2) {
            confetti({
                origin: {
                    x: 0.5,
                    y: 1.0
                }
            })
            confetti({
                origin: {
                    x: 0.5,
                    y: 0.5
                }
            })
            confetti({
                origin: {
                    x: 0.5,
                    y: 0.7
                }
            })
            confetti({
                origin: {
                    x: 0.5,
                    y: 0.2
                }
            })
        }
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
        // how to push the turn data to the array so bot can know selected tiles tiels ? 
        currentPlayersTurn = "red-player"
    } else if (currentPlayersTurn === "red-player") {
        event.target.classList.add('red-player')
        alertMsg.textContent = "Blue, go go go!"
        checkWinner(currentPlayersTurn)
        currentPlayersTurn = "blue-player"
        if (randomBotClicked) {
            setTimeout(runRandomBot, 1000)
        } else if (cleverBotClicked) {
            setTimeout(runCleverBot, 1000)
        }
    }
    if (event.target.classList.contains('blue-player') || event.target.classList.contains('red-player')) {
        event.target.removeEventListener('click', turnHandler)
    }
}

const disableBoard = () => {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener('click', turnHandler)
        if (!tiles[i].classList.contains(gameWinner)) {
            tiles[i].className = "tile-reset"
        } else {
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
        currentPlayersTurn = "red-player"
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

// RANDOM BOT 
const initRandomBot = () => {
    randomBotClicked = true
    alertMsg.textContent = "Random bot activated"
}
const runRandomBot = () => {
    let availableTiles = []
    for (let i = 0; i < tiles.length; i++) {
        if (!tiles[i].classList.contains('blue-player') && !tiles[i].classList.contains('red-player')) {
            availableTiles.push(i)
        }
    }
    let botMove = availableTiles[Math.floor(Math.random() * availableTiles.length)]
    tiles[botMove].click()
}

botButton.addEventListener('click', initRandomBot)

// CLEVER BOT 
const initCleverBot = () => {
    cleverBotClicked = true
    randomBotClicked = false
    alertMsg.textContent = "Clever bot activated"
}
const runCleverBot = () => {
    // go for middle tile first if you can sir 
    if (!tiles[4].classList.contains('blue-player') && !tiles[4].classList.contains('red-player')) {
        tiles[4].click()
    }
    // test for available tiles with a loop and store them in an array 
    let availableTiles = []
    for (let i = 0; i < tiles.length; i++) {
        if (!tiles[i].classList.contains('blue-player') && !tiles[i].classList.contains('red-player')) {
            availableTiles.push(i)
        }
    }
    // start the calculated logic to pick next tile

    // why is the below not working??
    let cornerTiles = [0, 8, 2, 6]// compare available tiles to corner tiles - if there is overlap - store the value in a new array - then select a random item from the new array 
    var cleverBotChoicesArr = []
    availableTiles.forEach((t1) => cornerTiles.forEach((t2) => {
        if (t1 === t2) {
            cleverBotChoicesArr.push(t1)
        }
    }))
    // select a random tile from those corner tiles 
    let betweenTiles = [1, 3, 5, 7]
}

const comparePlayableArrays = (arr1, arr2) => {
    cleverBotChoicesArr = []
}

// below method won't work because when only one of the tested tiles fails the block is exited 
// else if (!tiles[0].classList.contains('blue-player') && !tiles[0].classList.contains('red-player') &&
//     (!tiles[8].classList.contains('blue-player') && !tiles[8].classList.contains('red-player'))) {
//     let randomCornerIndexOne = cornerTilesOne[Math.floor(Math.random() * cornerTilesOne.length)]
//     tiles[randomCornerIndexOne].click() // but will not run when one of the first corners is occupied.. limitation
// } else if () {

// }

// .forEeach method, issue is that it bulk selects all the tiles 
// cornerTiles.forEach(function (tile) {
//     if (!tiles[tile].classList.contains('blue-player') && !tiles[tile].classList.contains('blue-player')) {
//         tiles[tile].click()
//     }
// })

// how to loop through and checl if each of those positions is occupied? 
// for (let i = 0; i < cornerTiles.length; i++) {
//     if (tiles[cornerTiles[i]].classList.contains('blue-player') || tiles[cornerTiles[i]].classList.contains('red-player')) {
//         tiles[i].click()
//     } else // potentially just select a random corner tile?

// then go for the rest of the inbetween tiles [1, 3, 5, 7]


//     // go for the middle tile first 
//     // look to see what outer tiles are occupied
//          // store each outer tile 
//     // else go for the rest of the available tiles 
// }

botButton.addEventListener('dblclick', initCleverBot)

$(".bot-icon").on("tripleclick", function () {
    randomBotClicked = false
    cleverBotClicked = false
    alertMsg.textContent = "Bot deactivated"
}) 
