# create a window in python using tkinter

import tkinter as tk

window = tk.Tk()
window.title("Minesweeper")
window.geometry("500x500")
window.mainloop()

# create a function that will create a board
def create_board(rows, cols, bombs):
    board = [['-' for _ in range(cols)] for _ in range(rows)]
    create_bombs(rows, cols, bombs)
    return board
# create a function that will create bombs  (randomly)  (use random module) (use randint function)  (use a for loop)
def create_bombs(rows, cols, bombs):
    for i in range(bombs):
        row, col = random.randint(0, rows - 1), random.randint(0, cols - 1)
        while board[row][col] == '*':
            row, col = random.randint(0, rows - 1), random.randint(0, cols - 1)
        board[row][col] = '*'
# create a function that will calculate the number of bombs in each cell (use a for loop)
def calculate_bombs(board):
    for i in range(rows):
        for j in range(cols):
            if board[i][j] != '*':
                bombs_count = 0
                for x in range(max(0, i - 1), min(i + 2, rows)):
                    for y in range(max(0, j - 1), min(j + 2, cols)):
                        if board[x][y] == '*':
                            bombs_count += 1
                board[i][j] = str(bombs_count)
    return board

# create a function that will display the board (use a for loop)
def display_board(board):
    for row in board: 
        print(' '.join(row))

# create a function that will take user input
def user_input():
    row, col = map(int, input('Enter row and column: ').split())
    return row, col

# create a function that will check if the user input is valid
def valid_input(board, row, col):
    if board[row][col] == '*':
        print('Game over!')
        display_board(board)
    elif board[row][col] != '-':
        print('Cell already revealed!')
    else:
        reveal_cells(board, row, col)
        display_board(board)
        if check_win(board):
            print('You won!')

# create a function that will check if the user input is a bomb
def check_bomb(board, row, col):
    if board[row][col] == '*':
        print('Game over!')
        display_board(board)

# create a function that will check if the user input is a number
# create a function that will check if the user input is a blank space
# create a function that will check if the user input is a win
