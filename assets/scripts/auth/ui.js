'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  $('.signuperror').hide()
  $('.error').hide()
}

const signUpFailure = (data) => {
  $('.signuperror').show()
}

const signInSuccess = data => {
  $('#sign-out').show()
  $('#change-password').show()
  $('#new-game').show()
  $('.error').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.signuperror').hide()
  store.user = data.user
}

const signInFailure = data => {
  $('.error').show()
}

const signOutSuccess = data => {
  $('.xwins').html('0')
  $('.owins').html('0')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#join-game').hide()
  $('.square').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.changepassworderror').hide()
  store.user = null
}

const signOutFailure = data => {
}

const changePasswordSuccess = data => {
  $('.changepassworderror').hide()
}

const changePasswordFailure = data => {
  $('.changepassworderror').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
