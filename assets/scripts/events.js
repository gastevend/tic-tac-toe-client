'use strict'

// const gameHandler = require('./gameApi/game-events')

let turn = 'X'
let board = 0
const playerX = 'XXX'
const playerO = 'OOO'
let gameOn = true
const data = {
  'game': {
    'cell': {
      'index': '0',
      'value': 'X'
    },
    'over': false
  }
}

const gamePlay = function () {
  if (turn === 'X') {
    $(this).html('X')
    turn = 'O'
    board += 1
    $(this).off('click')
    console.log(board)
  } else {
    $(this).html('O')
    turn = 'X'
    board += 1
    $(this).off('click')
    console.log(board)
    // const ind = Number($(this).id)
  }
}

const checkWinGame = function () {
  data.game.cell.index = $(this).attr('id')
  data.game.cell.value = $(this).html()
  if (board >= 5) {
    if (($('#0').html() + $('#1').html() + $('#2').html() === playerX) || ($('#0').html() + $('#1').html() + $('#2').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      data.game.over = true
    } else if (($('#3').html() + $('#4').html() + $('#5').html() === playerX) || ($('#3').html() + $('#4').html() + $('#5').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#6').html() + $('#7').html() + $('#8').html() === playerX) || ($('#6').html() + $('#7').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#0').html() + $('#3').html() + $('#6').html() === playerX) || ($('#0').html() + $('#3').html() + $('#6').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#1').html() + $('#4').html() + $('#7').html() === playerX) || ($('#1').html() + $('#4').html() + $('#7').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#2').html() + $('#5').html() + $('#8').html() === playerX) || ($('#2').html() + $('#5').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#0').html() + $('#4').html() + $('#8').html() === playerX) || ($('#0').html() + $('#4').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    } else if (($('#2').html() + $('#4').html() + $('#6').html() === playerX) || ($('#2').html() + $('#4').html() + $('#6').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
      data.game.over = true
    }
  }
  if (board === 9 && gameOn) {
    console.log('DRAW!!!!')
    gameOn = false
    data.game.over = true
  }
}
module.exports = {
  gamePlay,
  checkWinGame,
  data
//  mouseEnters,
//  mouseLeaves
}
