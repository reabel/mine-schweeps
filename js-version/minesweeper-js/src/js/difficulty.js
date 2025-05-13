const Difficulty = {
    EASY: {
        boardSize: 8,
        numberOfMines: 10
    },
    MEDIUM: {
        boardSize: 16,
        numberOfMines: 40
    },
    HARD: {
        boardSize: 24,
        numberOfMines: 99
    }
};

function getDifficultySettings(level) {
    switch (level) {
        case 'easy':
            return Difficulty.EASY;
        case 'medium':
            return Difficulty.MEDIUM;
        case 'hard':
            return Difficulty.HARD;
        default:
            throw new Error('Invalid difficulty level');
    }
}

export { Difficulty, getDifficultySettings };