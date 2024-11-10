const express = require('express')
const router = express.Router();
const {add, create, detail, edit, update, list, destroy, index} = require('../controllers/postsController')

// /posts

router
        .get('/',index)
        .get('/add',add)
        .post('/add', create)
        .get('/list',list)
        .get('/detail/:id',detail)
        .get('/edit/:id',edit)
        .post('/update/:id', update)
        .delete('/destroy',destroy)

module.exports = router