'use strict'

const api = require('./game-api')
const ui = require('./game-ui')
const events = require('../events')

const onNewGame = function (event) {
  $('.square').empty()
  events.resetVar()
  events.data.game.over = false
  event.preventDefault()
  $('.win-banner').hide()
  $('.changepassworderror').hide()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGamweFailure)
}

const onjoinGame = function (event) {
  event.preventDefault()
  api.joinGame()
  .then(ui.joinGameSuccess)
  .catch(ui.joinGameFailure)
}

const onUpdateBoard = function (data) {
  data = events.data
  api.updateBoard(data)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const onIndexGame = function () {
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

/* const onNumberOfGames = function () {
  api.numberOfGames()
    .then(ui.onNumberOfGamesSuccess)
    .catch(ui.onNumberOfGamesFailure)
} */

const addHandlers = () => {
  $('.square').on('click', events.gamePlay)
  $('.square').on('click', events.checkWinGame)
  $('.square').on('click', onUpdateBoard)
  $('#new-game').on('submit', onNewGame)
  $('#new-game').on('submit', onIndexGame)
  $('#join-game').on('submit', onjoinGame)
  // $('#new-game').on('submit', onNumberOfGames)
}

module.exports = {
  addHandlers
}
