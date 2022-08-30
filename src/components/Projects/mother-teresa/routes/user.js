const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { requireLogin } = require('./authMiddle');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//Register user
router.post('/Register', async (req, res) => {
    const {name, email, password} = req.body
    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({ error: "User already exists"})
        }
        const hashed_password = await bcrypt.hash(password, 10)
        user = new User({
            name, 
            email,
            password: hashed_password
        })
        await user.save()
        return res.status(201).json({message: 'User created successfully'});
        
    } catch (err){
        console.log(err)
    }
})

// Login users
router.post('/Login', async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({ error: "Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ error: "Invalid Credentials"});
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        })
        return res.json({token});
    } catch {
        console.log(err.message)
    }
})
router.get('/', requireLogin, async (req, res) => {
    console.log(req.user);
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch {
        console.log(err)
    }
})
module.exports = router