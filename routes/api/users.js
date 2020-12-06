const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// validate info
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');




// @route POST api/users
// @desc Register User route
// @access Public
// 
router.post('/', [
    // check that name is valid
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail,
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })],

    async (req, res) => {
        console.log(req);
        // handling response
        const errors = validationResult(req);
        // if there are errors return status 400
        if (!erros.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, passpwrd } = req.body;

        try {
            // see if user exists
            let user = await User.findOne({ email });

            if (user) {
                res.status(400).json({ errors: [{ msg: 'User Already exists' }] })
            }

            // get users gravatar

            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })


            // create user:
            user = new User({
                name,
                email,
                avatar,
                password
            })

            // envrypt password
            const salt = await bcrypt.genSalt(10)

            user.password = await bcrypt.hash(passwordl, salt);

            // save user
            await user.save();

            // return jsonwebtoken

            res.send("User Registered");

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }


    });

module.exports = router;