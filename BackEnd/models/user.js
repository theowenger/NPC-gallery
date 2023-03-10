const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

    pseudo: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    npc: { type: [String], required: false },
});

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('user', userSchema);