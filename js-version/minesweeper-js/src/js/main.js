import { Game } from './game.js';
import { ThemeManager } from './theme.js';

// Initialize the game and theme manager
const game = new Game();
const themeManager = new ThemeManager();

// Set up difficulty selection
document.addEventListener('DOMContentLoaded', () => {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const resetButton = document.getElementById('reset-btn');
    const difficultySelection = document.getElementById('difficulty-selection');

    difficultyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const difficulty = e.target.id;
            game.startGame(difficulty);
            
            // Hide difficulty selection after starting
            difficultySelection.style.display = 'none';
        });
    });

    resetButton.addEventListener('click', () => {
        game.resetGame();
        difficultySelection.style.display = 'block';
    });

    // Prevent context menu on the game board
    document.getElementById('game-board').addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
