'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./game-api')
const ui = require('./game-ui')
const events = require('../events')

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

const onUpdateBoard = function (data) {
  data = events.data
  console.log('data is ', data)
  console.log('onUpdateBoard was clicked')
  api.updateBoard(data)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const onIndexGame = function () {
  console.log('Im going to go fetch this game for you')
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
  $('#new-game').on('submit', onIndexGame)
  $('#join-game').on('submit', onjoinGame)
  $('.square').on('click', onUpdateBoard)
}

module.exports = {
  addHandlers
}
