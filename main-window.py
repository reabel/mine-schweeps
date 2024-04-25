import random
import os
import tkinter as tk

def create_board(rows, cols, bombs):
    #init_window()
    # Create an empty board
    board = [['-' for j in range(cols)] for i in range(rows)]
    # Place the bombs randomly
    for i in range(bombs):
        row, col = random.randint(0, rows - 1), random.randint(0, cols - 1)
        while board[row][col] == '*':
            row, col = random.randint(0, rows - 1), random.randint(0, cols - 1)
        board[row][col] = '*'
    # Calculate the number of bombs in each cell
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

def display_board(board):
    os.system('cls' if os.name == 'nt' else 'clear')
    for row in board:
        print(' '.join(row))

def play():
    rows, cols, bombs = 10, 10, 10
    board = create_board(rows, cols, bombs)
    display_board(board)
    while True:
        row, col = map(int, input('Enter row and column: ').split())
        if board[row][col] == '*':
            print('Game over!')
            display_board(board)
            break
        elif board[row][col] != '-':
            print('Cell already revealed!')
        else:
            reveal_cells(board, row, col)
            display_board(board)
            if check_win(board):
                print('You won!')
                break

def reveal_cells(board, row, col):
    if board[row][col] != '-':
        return
    board[row][col] = ' '
    for x in range(max(0, row - 1), min(row + 2, len(board))):
        for y in range(max(0, col - 1), min(col + 2, len(board[0]))):
            if board[x][y] == '-':
                reveal_cells(board, x, y)

def check_win(board):
    for row in board:
        if '-' in row:
            return False
    return True

# def get_user_input():
#     while True:
#         try:
#             row, col = map(int, input('Enter row and column: ').split())
#             if row < 0 or row >= rows or col < 0 or col >= cols:
#                 raise ValueError()
#             return row, col
#         except (ValueError, IndexError):
#             print('Invalid input! Please enter valid row and column values.')

# def play():
#     # Existing code...
#     while True:
#         row, col = get_user_input()
#         # Existing code...

def init_window():
    # Init window
    window = tk.Tk()
    window.minsize(600, 600)
    init_menu(window)
    title = tk.Label(
        text="Mine-schweeps",
        foreground="white",
        background="orange",
        )
    title.pack()
    window.mainloop()

def init_menu(window): 
    menubar = tk.Menu(window)
    filemenu = tk.Menu(menubar, tearoff=0)
    filemenu.add_command(label="Exit", command=window.quit)
    menubar.add_cascade(label="File", menu=filemenu)

    window.config(menu=menubar)


if __name__ == '__main__':
    #play()
    init_window()



# Sources:
#   https://realpython.com/python-gui-tkinter/
#   https://pythonspot.com/tk-menubar/
#   https://tkdocs.com/tutorial/widgets.html
#   https://tkdocs.com/tutorial/morewidgets.html
