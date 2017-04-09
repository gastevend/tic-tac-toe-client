'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = data => {
  console.log('signInSuccess ran. data is ', data)
  $('#sign-out').show()
  store.user = data.user
}

const signInFailure = error => {
  console.error('signInFailure ran. error is ', error)
}

const signOutSuccess = data => {
  $('.xwins').html('0')
  $('.owins').html('0')
  $('#sign-out').hide()
  console.log('signOutSuccess is running and nothing is returned')
  store.user = null
}

const signOutFailure = error => {
  console.error('signOutFailure ran. error is ', error)
}

const changePasswordSuccess = data => {
  console.log('changePassword is running')
}

const changePasswordFailure = error => {
  console.error('changePasswordFailure ran. error is ', error)
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
