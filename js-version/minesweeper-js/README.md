# 🎮 Minesweeper JS - Node.js Edition

![we-are-so-cooked](https://media1.tenor.com/m/1QW4ZcHeL-YAAAAd/cooked-myself-turkey-kramer.gif)

A modern, responsive Minesweeper game built with JavaScript and served via Node.js Express server.

## 🚀 Features

- **Three Difficulty Levels**: Easy (8x8, 10 mines), Medium (16x16, 40 mines), Hard (24x24, 99 mines)
- **Multiple Color Themes**: Choose from 5 beautiful themes:
  - **Classic**: Traditional blue-purple gradient
  - **Dark**: Sleek dark mode with cool colors
  - **Ocean**: Deep blue ocean-inspired theme
  - **Forest**: Natural green forest theme
  - **Sunset**: Warm orange-pink sunset colors
- **Theme Persistence**: Your selected theme is saved and restored on next visit
- **Modern UI**: Beautiful gradient backgrounds with glassmorphism effects
- **Responsive Design**: Works on desktop and mobile devices
- **Timer**: Track your solving time
- **Mine Counter**: Keep track of remaining mines
- **Flag System**: Right-click to flag suspected mines
- **Auto-reveal**: Empty cells automatically reveal adjacent cells
- **Smooth Animations**: Theme transitions and UI interactions are smoothly animated
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

1. **Select Theme**: Choose your preferred color theme from the dropdown at the top
2. **Select Difficulty**: Choose between Easy, Medium, or Hard
3. **Click cells** to reveal them
4. **Right-click cells** to flag/unflag them as mines
5. **Numbers** show how many mines are adjacent to that cell
6. **Avoid mines** - clicking a mine ends the game
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

## 🎨 Theme System

The game features a comprehensive theme system with 5 distinct visual themes:

### Available Themes
- **Classic**: Traditional minesweeper with blue-purple gradients
- **Dark**: Modern dark mode with cool gray tones
- **Ocean**: Deep blue oceanic theme with aquatic colors
- **Forest**: Natural green theme inspired by forests
- **Sunset**: Warm orange-pink gradient reminiscent of sunsets

### Features
- **Persistent Storage**: Your theme preference is saved in browser localStorage
- **Smooth Transitions**: All theme changes animate smoothly with CSS transitions
- **Complete Coverage**: Every UI element adapts to the selected theme
- **Accessibility**: Focus indicators and contrast maintained across all themes

### Technical Implementation
The theme system uses CSS custom properties (variables) that are dynamically updated by JavaScript:

```css
:root {
  --bg-gradient: /* Theme-specific gradient */;
  --text-primary: /* Theme-specific text color */;
  --cell-bg: /* Theme-specific cell background */;
  /* ... other theme variables */
}
```

Themes are managed by the `ThemeManager` class which:
- Loads saved preferences from localStorage
- Applies theme variables to CSS custom properties
- Handles theme switching with smooth animations
- Dispatches custom events for theme changes

## 📱 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design included

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for your own purposes.
- **src/css/style.css**: Contains styles for the game layout and animations.
- **src/js/game.js**: Initializes the game and manages user interactions.
- **src/js/board.js**: Defines the Board class and manages the game board.
- **src/js/cell.js**: Defines the Cell class for individual cells on the board.
- **src/js/difficulty.js**: Contains constants and functions for game difficulty levels.
- **src/assets/sounds**: Contains sound files for game actions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.