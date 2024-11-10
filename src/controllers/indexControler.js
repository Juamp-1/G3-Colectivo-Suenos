const {getData} = require('../data')

module.exports = {
    index : (req,res) => {

        return res.render('home')
    },
    admin : (req,res) => {

        return res.render('admin')
    },
    showError : (req,res) => {
        return res.render('error')
    }
}