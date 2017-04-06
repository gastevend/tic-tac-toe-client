'use strict'

let turn = 'X'
let board = 0

const gamePlay = function () {
  if (turn === 'X') {
    console.log('HEY im and X and you clicked on me!')
    $(this).html('X')
    turn = 'O'
    board += 1
    console.log(board)
    $(this).off('click')
  } else {
    console.log('Hey im an O and you clicked me')
    $(this).html('O')
    turn = 'X'
    board += 1
    console.log(board)
    $(this).off('click')
  }
}
/* const mouseEnters = function () {
  if
  $(this).html('X').css('color', 'gray')
}
const mouseLeaves = function () {
  $(this).html('').css('color', '#FFF')
} */
module.exports = {
  gamePlay
//  mouseEnters,
//  mouseLeaves
}
