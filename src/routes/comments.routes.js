const express = require('express')
const router = express.Router();
const {add, create, list, detail, edit, update, destroy} = require('../controllers/commentsController')

// /comments

router
        .get('/add',add)
        .post('/add', create)
        .get('/list',list)
        .get('/detail/:id',detail)
        .get('/edit/:id',edit)
        .post('/update/:id', update)
        .delete('/destroy',destroy)

module.exports = router