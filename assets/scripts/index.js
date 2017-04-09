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
const authHandler = require('./auth/auth-events')
const gameHandler = require('./gameApi/game-events')

$('#sign-out').hide()
$('.win-banner').hide()
$('#change-password').hide()
$('#new-game').hide()
$('#join-game').hide()
$('.square').hide()
$('.error').hide()

$(() => {
  authHandler.addHandlers()
  gameHandler.addHandlers()
})
