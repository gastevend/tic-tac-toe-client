'use strict'

let turn = 'X'
let board = 0
const playerX = 'XXX'
const playerO = 'OOO'
let gameOn = true

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
  if (board >= 5) {
    if (($('#0').html() + $('#1').html() + $('#2').html() === playerX) || ($('#0').html() + $('#1').html() + $('#2').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#3').html() + $('#4').html() + $('#5').html() === playerX) || ($('#3').html() + $('#4').html() + $('#5').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#6').html() + $('#7').html() + $('#8').html() === playerX) || ($('#6').html() + $('#7').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#0').html() + $('#3').html() + $('#6').html() === playerX) || ($('#0').html() + $('#3').html() + $('#6').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#1').html() + $('#4').html() + $('#7').html() === playerX) || ($('#1').html() + $('#4').html() + $('#7').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#2').html() + $('#5').html() + $('#8').html() === playerX) || ($('#2').html() + $('#5').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#0').html() + $('#4').html() + $('#8').html() === playerX) || ($('#0').html() + $('#4').html() + $('#8').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    } else if (($('#2').html() + $('#4').html() + $('#6').html() === playerX) || ($('#2').html() + $('#4').html() + $('#6').html() === playerO)) {
      if (turn === 'O') {
        turn = 'X'
      } else {
        turn = 'O'
      }
      console.log(turn + ' wins')
      $('div').off('click')
      gameOn = false
    }
  }
  if (board === 9 && gameOn) {
    console.log('DRAW!!!!')
  }
}
module.exports = {
  gamePlay,
  checkWinGame,
  gameOn
//  mouseEnters,
//  mouseLeaves
}
