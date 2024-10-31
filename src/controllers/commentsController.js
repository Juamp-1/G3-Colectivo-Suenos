const {getData, storeData} = require('../data')


module.exports = {
    list : (req,res) => {
        const comments = getData('comments.json')
        return res.render('comments/comments',
            comments
        )
    },
    detail : (req,res) => {
        const comments = getData('comments.json')
        const comment = comments.find(comment => comment.id == req.params.id)
        return res.render('comments/detail',
            ...comment
        )
    },
    add : (req,res) => {
        return res.render('comments/add')
    },
    create : (req,res) => {
        return res.send(req.body)
        
    },
    edit : (req,res) => {
        const comments = getData('comments.json')
        const comment = comments.find(comment => comment.id == req.params.id)
        return res.render('comments/edit', {
            ...comment
        })

    },
    update : (req,res) => {
        return res.send(req.body)

    },
    destroy : (req,res) => {
        const comments = getData('comments.json')
        const commentsModify = comments.filter(comment => comment.id != req.params.id)
        storeData(commentsModify, 'comments.json')
        return res.render('comments/comments',
            commentsModify
        )
    }
}