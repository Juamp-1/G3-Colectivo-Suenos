const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    return res.render('index',{
        title   : 'Crud',
    });
});

module.exports = router;