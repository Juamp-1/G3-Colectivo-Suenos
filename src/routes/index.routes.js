const express = require('express');
const router = express.Router();
const {index, admin} = require('../controllers/indexControler')


router
    .get('/',index) //-> /
    .get('/admin',admin) // -> /admin



module.exports = router