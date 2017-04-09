'use strict'

const store = require('../store')

const newGameSuccess = data => {
  console.log('newGameSuccess ran. data is ', data)
  store.game = data.game
}

const newGameFailure = error => {
  console.error('newGameFailure ran. error is ', error)
}

const joinGameSuccess = data => {
  console.log('joinGameSuccess ran. data is ', data)
  store.game = data.game
}

const joinGameFailure = error => {
  console.error('joinGameFailure ran. error is ', error)
}

const updateBoardSuccess = data => {
  console.log('updateBoardSuccess ran. data is ', data)
  store.game = data.game
}

const updateBoardFailure = error => {
  console.error('updateBoardFailure ran. error is ', error)
}

const indexGameSuccess = data => {
  console.log('indexGameSuccess ran. data is ', data)
  const x = 'X'
  const o = 'O'
  let gameswonx = 0
  let gameswono = 0
  // console.log(data.games.over)
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      for (let j = 0; j < 1; j++) {
        if (data.games[i].cells[0] === x && data.games[i].cells[1] === x && data.games[i].cells[2] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[3] === x && data.games[i].cells[4] === x && data.games[i].cells[5] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[6] === x && data.games[i].cells[7] === x && data.games[i].cells[8] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[0] === x && data.games[i].cells[3] === x && data.games[i].cells[6] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[1] === x && data.games[i].cells[4] === x && data.games[i].cells[7] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[2] === x && data.games[i].cells[5] === x && data.games[i].cells[8] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[0] === x && data.games[i].cells[4] === x && data.games[i].cells[8] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[2] === x && data.games[i].cells[4] === x && data.games[i].cells[6] === x) {
          gameswonx += 1
        } else if (data.games[i].cells[0] === o && data.games[i].cells[1] === o && data.games[i].cells[2] === o) {
          gameswono += 1
        } else if (data.games[i].cells[3] === o && data.games[i].cells[4] === o && data.games[i].cells[5] === o) {
          gameswono += 1
        } else if (data.games[i].cells[6] === o && data.games[i].cells[7] === o && data.games[i].cells[8] === o) {
          gameswono += 1
        } else if (data.games[i].cells[0] === o && data.games[i].cells[3] === o && data.games[i].cells[6] === o) {
          gameswono += 1
        } else if (data.games[i].cells[1] === o && data.games[i].cells[4] === o && data.games[i].cells[7] === o) {
          gameswono += 1
        } else if (data.games[i].cells[2] === o && data.games[i].cells[5] === o && data.games[i].cells[8] === o) {
          gameswono += 1
        } else if (data.games[i].cells[0] === o && data.games[i].cells[4] === o && data.games[i].cells[8] === o) {
          gameswono += 1
        } else if (data.games[i].cells[2] === o && data.games[i].cells[4] === o && data.games[i].cells[6] === o) {
          gameswono += 1
        }
      }
    }
  }
  $('.xwins').html(gameswonx)
  $('.owins').html(gameswono)
}

const indexGameFailure = error => {
  console.error('indexGameFailure ran. error is ', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  joinGameSuccess,
  joinGameFailure,
  updateBoardSuccess,
  updateBoardFailure,
  indexGameSuccess,
  indexGameFailure
}
