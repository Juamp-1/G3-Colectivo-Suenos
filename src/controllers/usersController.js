const {validationResult} = require('express-validator');
const {hashSync, compareSync} = require('bcryptjs');
const { getData, storeData } = require("../data");
const User = require('../models/User.js');

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : async (req,res) => {

        const errors = validationResult(req);

        try {
            const {username, email, password} = req.body;
            if(errors.isEmpty()){


                const newUser = new User({
                    username,
                    email,
                    password : hashSync(password, 12),
                    role : "user"
                })

                await newUser.save()
    
                return res.redirect('/users/login')
            }else {
                console.log(errors)
                return res.render('users/register',{
                    old : req.body,
                    errors : errors.mapped()
                })
            }
            
        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }

    },
    login : (req,res) => {

        return res.render('users/login')
    },
    processLogin : async (req,res) => {

        try {
            const {email, password} = req.body;        

            const user = await User.findOne({
                email
            })
            
            if(user && compareSync(password, user.password)) {
    
                req.session.userLogin = {
                    id : user.id,
                    name : user.username,
                    role : user.role
                }

                if (user.role == "admin" ){
                    return res.redirect('/admin')
                }

                return res.redirect('/')
            }else {
                return res.render('users/login',{
                    msg : "Credenciales inválidas"
                })
            }
        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }
      
    },
    forgot : (req,res) => {

        return res.render('users/forgot')
    },

    profile : (req,res) => {
        return res.render('users/profile')
    },
    logout : (req,res) =>{
        req.session.destroy()
        return res.redirect('/')
    }
} 