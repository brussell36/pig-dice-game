# _Pig Dice Game_

#### _Dice rolling game where the goal is to get to 100 points, 6/17/2020_

#### By _**Ben Russell, Noel Kirkland, Taylor Phillips**_

## Description

_This Application will allow a user to play a Dice game against a computer opponent. The goal will be to get to 100 points. If user rolls a 1 they will score nothing for that turn and have to let the opponent roll. A roll of 2-6 will be added to total and the user will get to decide to keep rolling or let the opponent have a turn._

## Specifications

1. Create a button that our user can push to roll a virtual dice that returns a number from 1 through 6
  Input: Click _roll_
  Output: roll: 3

Create a _current score_ display that shows the user's dice roll totals
  Input: Click _roll_ #1
  Output: roll: 3
  Total: 3
  Input: Click _roll_ #2
  Output: roll: 5
  Total: 8

Implement functionality so if a user rolls a 1 their turn automatically ends
  Input: Click _roll_ = 1
  Output total score = -- _turn ends_


Create a button that our user click to hault there turn and keep their current score
  Input: Click _hault_
  Output: total score = 22

Implement functionality so that multiple user's can play against one another and keep track of their individual totals
  Input: Player #1 _roll_
  Output: total score = 22

  Input: Player #2 _roll_
  Output: total score = 17

  Input: Player #3 _roll_
  Output: total score = 19

Implement functionality to stop the game once one player reaches a total score of 100
  Input: Player #1 _roll_
  Output: total score = 88

  Input: Player #2 _roll_
  Output: total score = 75

  Input: Player #3 _roll_
  Output: total score = 100 - _Stop Game_


## Setup/Installation Requirements

### Open by downloading

1. _Download this repository onto your computer._
2. _Double click index.html to open in your web browser._

### Open via Bash/Gitbash

* _clone this repository onto your computer: https://github.com/brussell36/pig-dice-game.git_
* _Navigate into the portfolio-page directory in VS Code or text editor of choice code ._
* _Open index.html in your preffered browser_
* _Feel free to edit anything you like and push them to your own repo_
* _This is all open source_


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you have any issues or questions and concerns, please contact me at benjaminrussell36@gmail.com._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_

### License

*MIT License*

Copyright (c) 2020 **_Ben Russell_, _Noel Kirkland_, and _Taylor Phillips_**