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

module.exports = {
  newGameSuccess,
  newGameFailure,
  joinGameSuccess,
  joinGameFailure
}
