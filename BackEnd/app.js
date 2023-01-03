const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const npcRoutes = require('./routes/npc')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((db) => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

    next();
})
mongoose.set('strictQuery', false)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Set-Cookie', 'cookieName=cookieValue; HttpOnly');
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
})


app.use('/api/npc', npcRoutes);

module.exports = app;