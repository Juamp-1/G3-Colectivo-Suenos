const express = require('express');
const router = express.Router();
const {index, admin, showError} = require('../controllers/indexControler')


router
    .get('/',index) //-> /
    .get('/admin',admin) // -> /admin
    .get('/error',showError)



module.exports = router