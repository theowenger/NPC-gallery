const User = require('../models/user.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(User => res.status(200).json(User))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {

    User.findOne({ _id: req.auth.userId })
        .then(User => {
            console.log(User)
            res.status(200).json(User)
        })
        .catch(error => res.status(400).json({ error }));
};

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
}

exports.login = (req, res, next) => {
    console.log('fonction ok')
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte!' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.APP_JWT_KEY,
                            { expiresIn: '48h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}