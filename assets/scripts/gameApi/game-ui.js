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
