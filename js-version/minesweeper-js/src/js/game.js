const Difficulty = {
    EASY: { rows: 8, cols: 8, mines: 10 },
    MEDIUM: { rows: 16, cols: 16, mines: 40 },
    HARD: { rows: 24, cols: 24, mines: 99 }
};

let board;
let gameOver = false;
let flags = 0;

function startGame(difficulty) {
    board = new Board(difficulty.rows, difficulty.cols, difficulty.mines);
    board.createBoard();
    renderBoard();
    gameOver = false;
    flags = 0;
}

function renderBoard() {
    const boardElement = document.getElementById('game-board');
    boardElement.innerHTML = '';
    for (let row of board.cells) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let cell of row) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.row = row.indexOf(cell);
            cellElement.dataset.col = row.indexOf(cell);
            cellElement.addEventListener('click', () => revealCell(cell));
            rowElement.appendChild(cellElement);
        }
        boardElement.appendChild(rowElement);
    }
}

function revealCell(cell) {
    if (gameOver || cell.isRevealed) return;
    cell.reveal();
    if (cell.isMine) {
        gameOver = true;
        alert('Game Over! You hit a mine.');
    } else {
        // Additional logic to reveal surrounding cells
    }
    checkWin();
}

function checkWin() {
    const revealedCells = board.cells.flat().filter(cell => cell.isRevealed);
    if (revealedCells.length === (board.rows * board.cols - board.mines)) {
        gameOver = true;
        alert('Congratulations! You won the game.');
    }
}

function toggleFlag(cell) {
    if (gameOver || cell.isRevealed) return;
    cell.toggleFlag();
    flags += cell.isFlagged ? 1 : -1;
}

export { startGame, revealCell, checkWin };