# Pick15 Readme 

Play the [demo](https://ajsaule.github.io/Project-1-GA/).

The game's objective is to align three consecutive tiles in a row, column or diagonally that add to 15. 

Initially the game was going to take an input of a number from 1 up to but not including 10 on each tile, and once there were three numbers that add to 15 - the program would signal a winner. 

After research and discovery of mulitple roadblocks regarding my knowledge it was decided that the methods discussed in class were more suitable to implement. Upon playing the game you will notice that I used the idea of how pick15 is played but put up a finished bord where all possibly played combinations will add to 15.  

The method to check for a winner was using DOM checking contents of class names, then performing multiple tests for each possible winning combination utilising if..else control flow. 

Technologies utilised here are: 
- JavaScript 
- HTML/ CSS 
- npm - canvas-confetti [package](https://www.npmjs.com/package/canvas-confetti)
- jQuery (For the triple click)

# Program Features 

Upon playing the game you will realise that the basic idea of Tic-Tac-Toe applies by having to line up 3 tiles in a column, row or diagonally.

Red player will start the game, blue will follow. The counter will be incremented once Red or Blue wins, if there is a draw the reset button should be pressed to reset the played tiles and start a new game. 

##### Hidden Features
- The first player to get to 3 gets a special celebration. 
- Click on the Robot icon once in the top left for randomness 
- Click on the Robot twice for a bit more of a challenge (WORK IN PROGRESS)
- Click on the Robot three times to disable it 


## Rough Steps / Wireframe

1. Create game grid ❌
    - Each tile in the grid needs to be responsive to hover and on page events ❌
    - Each tile needs to have a unique identifier ❌

2. Board design ❌
    - Create a glow effect behind the main board space  ❌
    - Create a subboard below the main board to contain scores and messages  ❌
    - Set a glow color for each players selected tile in the game e.g. (purple, green)  ❌
    - Make the losers colors dissapear off the board when there is a winner ❌

3. Game logic ❌
    - Upon player selecting a tile, check if the board has three consecutive tiles  ❌
    - If three consecutive tiles are aligned display 'WINNER' message at top of screen 
    - Interaction with the board should be disabled once there is a winner ❌
    - Else change to next players turn until all grid tiles have been selected ❌
    - If all tiles have been selected show 'IT'S A DRAW' message and highlight reset button // glow under it? 

4. Scoring 
    - Write all scores and messages to the board as game progresses ❌
    - Add + 1 to the winning player's tally ❌
    - Calculate a percentage of wins for each player ?
    - Reset button resets the stored counts of tiles clicked / board's appearance ❌

5. BONUS FEATURES 
    - Create a glow effect on the three winnig tiles of player ❌
    - Add confetti animation when someone wins the game ❌
    - Add info pane that on hover or tap shows extra info on the game ❌
    - Theme changer, allows user to change the bgcolors and glowing effects ?
    - Create a bot to play against 
        - Random bot ❌
            - Bot that selects completely random tiles  ❌
        - Smart bot 
            - Bot that selects tiles based on some rough pattern
                // maybe middle tile first then corner tiles then remaining inbetween tiles? 
    - Research session storage and allow game data to persist after browser crash or closure

## IMPROVEMENTS 
- Possibly refactor and package up some of the conditional statements into functions 
- Look into a different method of checking for winner, possibly via calculating the total possible score for each selected tile and seeing if it adds up to any given amount 
