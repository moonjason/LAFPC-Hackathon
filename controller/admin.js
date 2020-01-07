const express = require('express')
const router = express.Router()
const Admin    = require('../models/admin')

const bcrypt  = require('bcryptjs')

//admin register route

router.post('/register-admin', async (req, res) =>{
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    req.body.password = hashedPassword;
    console.log('hit register route')
    try{
        const createdAdmin = await Admin.create(req.body);
        console.log(createdAdmin, 'this is created Admin');
        req.session.adminId = createdAdmin._id;
        req.session.username = createdAdmin.username;
        req.session.logged = true;
        res.json({
            data: createdAdmin
        })
    }catch(err){
        console.log(err, 'this is error')
    }
})

//login register route

router.post('/login-admin', async (req,res)=>{
    console.log(req.body, '<-----hitting')
    try{
        const foundAdmin = await Admin.findOne({
            username: req.body.username
        })
        if(foundAdmin){
            if(bcrypt.compareSync(req.body.password, foundAdmin.password)){
                req.session.adminId = foundAdmin._id;
                req.session.username = foundAdmin.username;
                req.session.logged = true;

                res.json({
                    foundAdmin
                })
            }else{
                req.session.message = "Sorry, information provided does not match";
            }
        }else{
            req.session.message = "Sorry, information provided does not match";
        }
    }catch(err){
        res.send(err);
    }
})

//logout admin

router.get('/logout-admin', (req, res) =>{
    req.session.destroy((err) =>{
        if(err){
            res.send(err);
        } else{
            res.json({
                "isLogged": true
            })
        }
    })
})

module.exports = router;