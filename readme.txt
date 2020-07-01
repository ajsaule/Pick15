# TIC-TAC-GLOW Readme 

The game's objective is to align three consecutive tiles in a row, column or diagonally. 

// include explanation as to how the game works overall

# Program Features 

// include all program features 

## Thought Process / Wireframe

1. Create game grid ❌
    - Each tile in the grid needs to be responsive to hover and on page events ❌
    - Each tile needs to have a unique identifier ❌

2. Board design ❌
    - Create a glow effect behind the main board space  ❌
    - Create a subboard below the main board to contain scores and messages  ❌
    - Set a glow color for each players selected tile in the game e.g. (purple, green)  ❌

3. Game logic 
    - Upon player selecting a tile, check if the board has three consecutive tiles  ❌
    - If three consecutive tiles are aligned display 'WINNER' message at top of screen 
    - Interaction with the board should be disabled once there is a winner
    - Else change to next players turn until all grid tiles have been selected 
    - If all tiles have been selected show 'IT'S A DRAW' message and highlight reset button // glow under it?

4. Scoring 
    - Add + 1 to the winning player's tally
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
