# 🎮 Minesweeper JS - Node.js Edition

![we-are-so-cooked](https://media1.tenor.com/m/1QW4ZcHeL-YAAAAd/cooked-myself-turkey-kramer.gif)

A modern, responsive Minesweeper game built with JavaScript and served via Node.js Express server.

## 🚀 Features

- **Three Difficulty Levels**: Easy (8x8, 10 mines), Medium (16x16, 40 mines), Hard (24x24, 99 mines)
- **Modern UI**: Beautiful gradient background with glassmorphism effects
- **Responsive Design**: Works on desktop and mobile devices
- **Timer**: Track your solving time
- **Mine Counter**: Keep track of remaining mines
- **Flag System**: Right-click to flag suspected mines
- **Auto-reveal**: Empty cells automatically reveal adjacent cells
- **Node.js Server**: Served via Express for better performance and deployment options

## 🛠️ Installation

1. **Clone or download** the project
2. **Navigate** to the project directory:
   ```bash
   cd minesweeper-js
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Game

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The game will be available at: **http://localhost:3000**

## 🎯 How to Play

1. **Select Difficulty**: Choose between Easy, Medium, or Hard
2. **Click cells** to reveal them
3. **Right-click cells** to flag/unflag them as mines
4. **Numbers** show how many mines are adjacent to that cell
5. **Avoid mines** - clicking a mine ends the game
6. **Win** by revealing all non-mine cells

## 🏗️ Project Structure

```
minesweeper-js/
├── server.js              # Express server
├── package.json           # Dependencies and scripts
├── README.md              # This file
└── src/                   # Static files
    ├── index.html         # Main HTML file
    ├── css/
    │   └── style.css      # Styles
    └── js/
        ├── main.js        # Entry point
        ├── game.js        # Game logic
        ├── board.js       # Board management
        ├── cell.js        # Cell class
        └── difficulty.js  # Difficulty settings
```

## 🔧 Technical Details

- **Backend**: Node.js with Express
- **Frontend**: Vanilla JavaScript with ES6 modules
- **Styling**: Modern CSS with gradients and glassmorphism
- **Architecture**: Modular design with separate classes for game components

## 🚀 Deployment

This project can be deployed to any Node.js hosting platform:

- **Heroku**: Add a `Procfile` with `web: node server.js`
- **Railway**: Works out of the box
- **Render**: Detects Node.js automatically
- **Digital Ocean App Platform**: Use Node.js buildpack

## 📱 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design included

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for your own purposes.

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