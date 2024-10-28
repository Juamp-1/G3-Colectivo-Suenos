const path = require('path');


module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    reset : (req,res) => {
        return res.render('reset')
    },
    login : (req,res) => {
        return res.render('login')
    },
    profile : (req,res) => {
        return res.render('profile')
    }
} 