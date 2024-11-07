const express = require('express');
const router = express.Router();
const {register, processRegister, login, processLogin, profile, logout, forgot} = require('../controllers/usersController')
const registerValidator = require('../validations/registerValidator')
// /users

router
    .get('/register',register)
    .post('/register',registerValidator, processRegister)
    .get('/login',login)
    .post('/login', processLogin)
    .get('/profile',profile)
    .get('/forgot',forgot)
    .get('/logout',logout)

module.exports = router