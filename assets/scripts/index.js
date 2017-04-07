'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
const events = require('./events')
const authHandler = require('./auth/auth-events')

$(() => {
  $('.game-board > div').on('click', events.gamePlay)
  $('.game-board > div').on('click', events.checkWinGame)
  authHandler.addHandlers()
})
