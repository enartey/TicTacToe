# TicTacToe
WebApps Class Project by Edwin Nartey and Dakota McCoy

# Overview
This project involves creating a javascript version of tic tac toe. The game board will be a square of potentially varying sizes, which will be represented by an array with all values defaulted to null. Moves will be made by clicking on the board. When a space on the board is selected, it will check if the value is null. If so, it will change it to a 0 or 1 based on whose turn it is, which will have to be kept track of seperately by another variable. There exists a finite number of combinations for any game board, and only some of those represent "winning" combinations. The program will have a library of winning configurations to check the array for, and it will do so after each individual move. A reset button will be available to reset the board.
