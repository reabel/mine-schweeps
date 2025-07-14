import { Board } from './board.js';
import { getDifficultySettings } from './difficulty.js';

export class Game {
    constructor() {
        this.board = null;
        this.gameOver = false;
        this.gameWon = false;
        this.flagCount = 0;
        this.startTime = null;
        this.timer = null;
    }

    startGame(difficultyLevel) {
        const difficulty = getDifficultySettings(difficultyLevel);
        this.board = new Board(difficulty.rows, difficulty.cols, difficulty.mines);
        this.gameOver = false;
        this.gameWon = false;
        this.flagCount = 0;
        this.startTime = Date.now();
        this.startTimer();
        this.renderBoard();
        this.updateMineCount();
        document.getElementById('game-status').textContent = '';
        document.getElementById('reset-btn').style.display = 'inline-block';
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (!this.gameOver) {
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                document.getElementById('time-elapsed').textContent = elapsed;
            }
        }, 1000);
    }

    renderBoard() {
        const boardElement = document.getElementById('game-board');
        boardElement.innerHTML = '';
        boardElement.style.gridTemplateColumns = `repeat(${this.board.cols}, 30px)`;
        
        for (let row = 0; row < this.board.rows; row++) {
            for (let col = 0; col < this.board.cols; col++) {
                const cell = this.board.cells[row][col];
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.dataset.row = row;
                cellElement.dataset.col = col;
                
                this.updateCellDisplay(cellElement, cell);
                
                cellElement.addEventListener('click', (e) => this.handleCellClick(e, row, col));
                cellElement.addEventListener('contextmenu', (e) => this.handleRightClick(e, row, col));
                
                boardElement.appendChild(cellElement);
            }
        }
    }

    updateCellDisplay(cellElement, cell) {
        cellElement.className = 'cell';
        
        if (cell.isRevealed) {
            cellElement.classList.add('revealed');
            if (cell.isMine) {
                cellElement.classList.add('mine');
                cellElement.textContent = '💣';
            } else if (cell.adjacentMines > 0) {
                cellElement.textContent = cell.adjacentMines;
                cellElement.classList.add(`number-${cell.adjacentMines}`);
            }
        } else if (cell.isFlagged) {
            cellElement.classList.add('flagged');
            cellElement.textContent = '🚩';
        } else {
            cellElement.textContent = '';
        }
    }

    handleCellClick(event, row, col) {
        event.preventDefault();
        if (this.gameOver || this.board.cells[row][col].isFlagged) return;
        
        const cell = this.board.revealCell(row, col);
        if (cell && cell.isMine) {
            this.gameOver = true;
            this.board.revealAllMines();
            this.showGameStatus('💥 Game Over! You hit a mine!', 'game-over');
            clearInterval(this.timer);
        } else {
            if (this.board.isWon()) {
                this.gameOver = true;
                this.gameWon = true;
                this.showGameStatus('🎉 Congratulations! You won!', 'game-won');
                clearInterval(this.timer);
            }
        }
        
        this.renderBoard();
    }

    handleRightClick(event, row, col) {
        event.preventDefault();
        if (this.gameOver) return;
        
        const cell = this.board.cells[row][col];
        if (!cell.isRevealed) {
            const wasFlagged = cell.isFlagged;
            this.board.toggleFlag(row, col);
            this.flagCount += wasFlagged ? -1 : 1;
            this.updateMineCount();
            this.renderBoard();
        }
    }

    updateMineCount() {
        const remaining = this.board.mineCount - this.flagCount;
        document.getElementById('mines-remaining').textContent = remaining;
    }

    showGameStatus(message, className) {
        const statusElement = document.getElementById('game-status');
        statusElement.textContent = message;
        statusElement.className = className;
    }

    resetGame() {
        if (this.timer) clearInterval(this.timer);
        this.board = null;
        this.gameOver = false;
        this.gameWon = false;
        this.flagCount = 0;
        document.getElementById('game-board').innerHTML = '';
        document.getElementById('game-status').textContent = '';
        document.getElementById('mines-remaining').textContent = '0';
        document.getElementById('time-elapsed').textContent = '0';
        document.getElementById('reset-btn').style.display = 'none';
    }
}