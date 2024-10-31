const path = require('path');


module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res) => {
        
    },
    reset : (req,res) => {
        return res.render('reset')
    },
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {

    },
    profile : (req,res) => {
        return res.render('profile')
    },
    logout : (req,res) => {
        return res.send('chauuuu')
    }
} 