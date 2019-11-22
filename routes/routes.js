const { Router } = require('express');
const router = Router();

const UserModel = require('../models/user.js');

let hasAccess = false;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/logIn', (req, res) => {
    if (!hasAccess) {
        res.render('logIn')}
        else {
            res.redirect ('profile')
        }
});

router.get('/signUp', (req, res) => {
    if (!hasAccess) {
    res.render('signUp')}
    else {
        res.redirect ('profile')
    }
});

router.get('/profile', (req, res) => {
    if (hasAccess) {
        res.render('profile');
    }
    else {
        res.redirect('/')
    }

});


router.post('/insert', async (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let isauser = await UserModel.find({ email: email })

    if (isauser.length == 0) {
        const user = new UserModel({
            name: name,
            email: email,
            password: password
        })
        user.save();
        res.render('profile', { name, email })

    } else {

        let info = "This account exist already, please login"
        res.render('logIn', { info })
    }

});

router.post('/logIn', async (req, res) => {

    let emailInputted = req.body.email;
    let password = req.body.password;

    let info;
    let isauser = await UserModel.find({ email: emailInputted })

    // turns an empty array
    if (isauser.length == 0) {
        info = "This email or password dosent exist"
        res.render('login', { info })
    }
    else if (password == isauser[0].password) {
        ///  targeting objects first array to get the name
        let name = `Hello ${isauser[0].name}`
        let email = `Your email is ${isauser[0].email}`
        hasAccess = true
        res.render('profile', { name, email })
    }
    else {
        info = "This email or password dosent exist"
        res.render('login', { info })

    }



});

module.exports = router;
