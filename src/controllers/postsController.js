const {getData, storeData} = require('../data')
const Post = require('../models/Post.js')
const Tag = require('../models/Tag.js')


module.exports = {
    index : async (req,res) => {
        try {
            const posts = await Post.find().populate('tag')
            return res.render('posts',{
                posts
            },)
            
        } catch (error) {
            console.log(error)
            return res.redirect('error')
        }
    },
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
    add : async (req,res) => {
        try {
            const tags = await Tag.find()
            return res.render('posts/add',{
                tags
            })

        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }
    },
    create : async (req,res) => {

        try {

            const {title, subtitle, tag, description} = req.body;

            const newPost = new Post({
                title,
                subtitle,
                tag,
                description
            })

            await newPost.save()

            return res.redirect('/posts')
            
        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }
    
        
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