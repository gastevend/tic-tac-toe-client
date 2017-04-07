'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./game-api')
const ui = require('./game-ui')

const onNewGame = function (event) {
  console.log('onNewGame was clicked')
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGamweFailure)
}

const onjoinGame = function (event) {
  console.log('onJoinGame was clicked')
  event.preventDefault()
  api.joinGame()
  .then(ui.joinGameSuccess)
  .catch(ui.joinGameFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
  $('#join-game').on('submit', onjoinGame)
}

module.exports = {
  addHandlers
}
