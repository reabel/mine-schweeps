export const Difficulty = {
    EASY: {
        rows: 8,
        cols: 8,
        mines: 10
    },
    MEDIUM: {
        rows: 16,
        cols: 16,
        mines: 40
    },
    HARD: {
        rows: 24,
        cols: 24,
        mines: 99
    }
};

export function getDifficultySettings(level) {
    switch (level.toLowerCase()) {
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