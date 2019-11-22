const { Router } = require('express');
const router = Router();

const UserModel = require('../models/user.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/logIn', (req, res) => {
    res.render('logIn');
});

router.get('/signUp', (req, res) => {
    res.render('signUp');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});


router.post('/insert', (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    const user = new UserModel({
        name: name,
        email: email,
        password: password
    })

    user.save();

    res.render('index')
});

router.post('/logIn', async (req, res) => {

    let email = req.body.email;
    // let password = req.body.password;

    let info;
    let isauser = await UserModel.find({ email: email })
    
    // turns an empty array
    if (isauser.length == 0) {
        info = "This email or password dosent exist"
        res.render('login', { info })
    }
    else {
        ///  targeting objects first array to get the name
        let name = `Hello ${isauser[0].name}`
        let email2 = `Your email is ${isauser[0].name}`
        res.render('profile', { name, email2 })
    }



});

module.exports = router;
