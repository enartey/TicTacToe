# TicTacToe
WebApps Class Project by Edwin Nartey and Dakota McCoy

# Overview
This project involves creating a javascript version of tic tac toe.
The primary object created will be a game board, with three properties.

The first property is a nested array. It is constructed with a given integer, and the outer array will have that many arrays in it. The inner arrays will each have that many slots in them, initialized to -1, which represent the various spaces on the game board. As moves are made, the values change to 0 or 1, depending on whose turn it is. 0 represents O and 1 represents X.

The second property is an integer called "turn." It is a 0 if it is O's turn and 1 if it is X's turn.

The third property is an integer called "boardSize." It will save the board size, X, (X by X) for it's proto methods to use.

# Use
Players take turns clicking tic-tac-toe spaces on the board to place their piece. Player one is O and player 2 is X. Get three in a row and you win!

# Proto Methods

```initialize()``` : Initializes the board object and gives it a nested array of all -1, representing empty board spaces. Turn is set to 0, to indicate that O is player 1 and moves first. BoardSize is set to the passed parameter, which for this project we are passing a board size of 3. The win property is set to 0, indicating that there is no winner yet.The object, this, is returned.

```isOutOfBounds(i, j)``` : Takes coordinates i and j and returns true if they fall OUT OF BOUNDS and cannot be played on.

```checkXX(i, j)``` : Eight individual check functions are written, which return true if the check in that direction has the same piece that is in the position given, and false otherwise. The checks are as follows:

```checkDL(i, j)``` : Down and Left
```checkDR(i, j)``` : Down and Right
```checkUR(i, j)``` : Up and right
```checkUL(i, j)``` : Up and Left
```checkL(i, j)``` : Left
```checkR(i, j)``` : Right
```checkD(i, j)``` : Down
```checkU(i, j)``` : Up

```checkDiag(i, j)``` : Checks if a diagonal of three individual spaces in a row passes through the given coordinates, if yes, returns true, false otherwise. Makes use of individual check functions.

```checkRow(i, j)``` : Checks if a row of three individual spaces in a row passes through the given coordinates, if yes, returns true, false otherwise. Makes use of individual check functions.

```checkColumn(i, j)``` : Checks if a column of three individual spaces in a row passes through the given coordinates, if yes, returns true, false otherwise. Makes use of individual check functions.

```checkLanes(i, j)``` : Returns whether or not checkRow(), checkDiag(), or checkColumn() have returned true. This indicates a winner.

```set(i, j)``` : Sets board.arr and position [i][j] to mark whoever has placed their piece there. Then runs checkLanes to determine if that move has resulted in the winner. If it has not, it simply triggers a change for the view component to reflect.

```winner()``` : Sets the board's win property to 1, reinitializes the board, and triggers a change for the view component to reset the board's UI.

```on()``` : Recieves a request from controller telling it there is an event that needs to be handled.

```trigger()``` : Sends a request to controller, notifying it that there is an event that needs to be handled.
