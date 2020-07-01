# Pick15 Readme 

Play the demo https://ajsaule.github.io/Project-1-GA/

The game's objective is to align three consecutive tiles in a row, column or diagonally that add to 15. 

// include explanation as to how the game works overall

# Program Features 

// include all program features 

## Rough Steps / Wireframe (Version1)

1. Create game grid ❌
    - Each tile in the grid needs to be responsive to hover and on page events ❌
    - Each tile needs to have a unique identifier ❌

2. Board design ❌
    - Create a glow effect behind the main board space  ❌
    - Create a subboard below the main board to contain scores and messages  ❌
    - Set a glow color for each players selected tile in the game e.g. (purple, green)  ❌
    - Make the losers colors dissapear off the board when there is a winner ❌

3. Game logic 
    - Upon player selecting a tile, check if the board has three consecutive tiles  ❌
    - If three consecutive tiles are aligned display 'WINNER' message at top of screen 
    - Interaction with the board should be disabled once there is a winner ❌
    - Else change to next players turn until all grid tiles have been selected ❌
    - If all tiles have been selected show 'IT'S A DRAW' message and highlight reset button // glow under it?

4. Scoring 
    - Write all scores and messages to the board as game progresses 
    - Add + 1 to the winning player's tally ❌
    - Calculate a percentage of wins for each player 
    - Reset button resets the stored counts/ board's appearance/ score tally

5. BONUS FEATURES 
    - Theme changer, allows user to change the bgcolors and glowing effects 
    - Create a bot to play against 
        - Random bot
            - Bot that selects completely random tiles  
        - Smart bot 
            - Bot that selects tiles based on some rough pattern
                // maybe middle tile first then corner tiles then outer columns? 
    - Research session storage and allow game data to persist after browser crash or closure

##IMPROVEMENTS 
- Possibly refactor and package up some of the conditional statements into functions 