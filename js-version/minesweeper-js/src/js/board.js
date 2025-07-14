import { Cell } from './cell.js';

export class Board {
    constructor(rows, cols, mineCount) {
        this.rows = rows;
        this.cols = cols;
        this.mineCount = mineCount;
        this.cells = [];
        this.isGameOver = false;
        this.createBoard();
    }

    createBoard() {
        this.cells = Array.from({ length: this.rows }, () => 
            Array.from({ length: this.cols }, () => new Cell())
        );
        this.placeMines();
        this.calculateAdjacentMines();
    }

    placeMines() {
        let minesPlaced = 0;
        while (minesPlaced < this.mineCount) {
            const row = Math.floor(Math.random() * this.rows);
            const col = Math.floor(Math.random() * this.cols);
            if (!this.cells[row][col].isMine) {
                this.cells[row][col].isMine = true;
                minesPlaced++;
            }
        }
    }

    calculateAdjacentMines() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.cells[row][col].isMine) {
                    this.incrementAdjacentCells(row, col);
                }
            }
        }
    }

    incrementAdjacentCells(row, col) {
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (r >= 0 && r < this.rows && c >= 0 && c < this.cols && !(r === row && c === col)) {
                    this.cells[r][c].adjacentMines++;
                }
            }
        }
    }

    revealCell(row, col) {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) return;
        
        const cell = this.cells[row][col];
        if (cell.isRevealed || cell.isFlagged) return;
        
        cell.reveal();
        
        // If cell has no adjacent mines, reveal surrounding cells
        if (cell.adjacentMines === 0 && !cell.isMine) {
            for (let r = row - 1; r <= row + 1; r++) {
                for (let c = col - 1; c <= col + 1; c++) {
                    this.revealCell(r, c);
                }
            }
        }
        
        return cell;
    }

    toggleFlag(row, col) {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) return;
        
        const cell = this.cells[row][col];
        if (!cell.isRevealed) {
            cell.toggleFlag();
        }
        return cell;
    }

    isWon() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = this.cells[row][col];
                if (!cell.isMine && !cell.isRevealed) {
                    return false;
                }
            }
        }
        return true;
    }

    revealAllMines() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.cells[row][col].isMine) {
                    this.cells[row][col].reveal();
                }
            }
        }
    }

    resetBoard() {
        this.createBoard();
        this.isGameOver = false;
    }
}