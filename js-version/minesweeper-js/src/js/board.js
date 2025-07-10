class Board {
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

    resetBoard() {
        this.createBoard();
        this.isGameOver = false;
    }
}

class Cell {
    constructor() {
        this.isMine = false;
        this.isRevealed = false;
        this.adjacentMines = 0;
        this.isFlagged = false;
    }

    reveal() {
        this.isRevealed = true;
    }

    toggleFlag() {
        this.isFlagged = !this.isFlagged;
    }
}

export { Board, Cell };