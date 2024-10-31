const express = require('express')
const router = express.Router();
const {register, processRegister, login, processLogin, profile, logout} = require('../controllers/usersController')

// /users

router
        .get('/register',register)
        .post('/process-register', processRegister)
        .get('/login',login)
        .post('/process-login', processLogin)
        .get('/profile',profile)
        .get('/logout', logout)

module.exports = router