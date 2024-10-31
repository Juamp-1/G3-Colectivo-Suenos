const {getData, storeData} = require('../data')


module.exports = {
    list : (req,res) => {
        const posts = getData('posts.json')
        return res.render('posts/list',
            posts
        )
    },
    detail : (req,res) => {
        const posts = getData('posts.json')
        const post = posts.find(post => post.id == req.params.id)
        return res.render('posts/detail',
            ...post
        )
    },
    add : (req,res) => {
        return res.render('posts/add')
    },
    create : (req,res) => {
        return res.send(req.body)
        
    },
    edit : (req,res) => {
        const posts = getData('posts.json')
        const post = posts.find(post => post.id == req.params.id)
        return res.render('posts/edit', {
            ...post
        })

    },
    update : (req,res) => {
        return res.send(req.body)

    },
    destroy : (req,res) => {
        const posts = getData('posts.json')
        const postsModify = posts.filter(post => post.id != req.params.id)
        storeData(postsModify, 'posts.json')
        return res.render('posts/list',
            postsModify
        )
    }
}