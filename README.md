# TicTacToe
WebApps Class Project by Edwin Nartey and Dakota McCoy

# Overview
This project involves creating a javascript version of tic tac toe.
The primary object created will be a game board, with three properties.

The first property is a nested array. It is constructed with a given integer, and the outer array will have that many arrays in it. The inner arrays will each have that many slots in them, initialized to null, which represent the various spaces on the game board. As moves are made, the values change to 0 or 1, depending on whose turn it is. 0 represents O and 1 represents X.

The second property is an integer called "turn." It is a 0 if it is O's turn and 1 if it is X's turn.

The third property is an integer called "boardsize." It will save the board size, X, (X by X) for it's proto methods to use.

# Proto Methods

