# Minesweeper Game

This is a JavaScript-based implementation of the classic Minesweeper game. The game features three different difficulty levels: Easy, Medium, and Hard. 

## Table of Contents
- [Game Overview](#game-overview)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Structure](#game-structure)
- [License](#license)

## Game Overview
Minesweeper is a logic-based puzzle game where the objective is to clear a rectangular board containing hidden "mines" without detonating any of them. The player uncovers cells one at a time, and each cell may contain a mine or a number indicating how many mines are adjacent to it.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/minesweeper-js.git
   ```
2. Navigate to the project directory:
   ```
   cd minesweeper-js
   ```
3. Open `src/index.html` in your web browser to play the game.

## How to Play
1. Choose a difficulty level: Easy, Medium, or Hard.
2. Click on a cell to reveal it. If you reveal a mine, the game is over.
3. Use the numbers revealed to deduce where the mines are located.
4. Right-click (or long-press on mobile) to flag a suspected mine.
5. Try to clear the board without hitting any mines!

## Game Structure
- **src/index.html**: The main HTML file that sets up the game structure.
- **src/css/style.css**: Contains styles for the game layout and animations.
- **src/js/game.js**: Initializes the game and manages user interactions.
- **src/js/board.js**: Defines the Board class and manages the game board.
- **src/js/cell.js**: Defines the Cell class for individual cells on the board.
- **src/js/difficulty.js**: Contains constants and functions for game difficulty levels.
- **src/assets/sounds**: Contains sound files for game actions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.