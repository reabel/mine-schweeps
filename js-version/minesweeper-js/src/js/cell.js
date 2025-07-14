export class Cell {
    constructor(isMine = false) {
        this.isMine = isMine;
        this.isRevealed = false;
        this.isFlagged = false;
        this.adjacentMines = 0;
    }

    reveal() {
        this.isRevealed = true;
    }

    toggleFlag() {
        this.isFlagged = !this.isFlagged;
    }

    getDisplayValue() {
        if (this.isFlagged) return '🚩';
        if (!this.isRevealed) return '';
        if (this.isMine) return '💣';
        return this.adjacentMines > 0 ? this.adjacentMines.toString() : '';
    }
}