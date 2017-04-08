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
  $('.square').on('click', events.gamePlay)
  $('.square').on('click', events.checkWinGame)
  $('.square').on('click', onUpdateBoard)
  $('#new-game').on('submit', onNewGame)
  $('#new-game').on('submit', onIndexGame)
  $('#join-game').on('submit', onjoinGame)
}

module.exports = {
  addHandlers
}
