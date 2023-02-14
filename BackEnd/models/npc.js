const mongoose = require('mongoose');

const npcSchema = mongoose.Schema({

    name: { type: String, required: true },
    univers: { type: String, required: true },
    race: { type: String, required: true },
    sexe: { type: String, required: true },
    age: { type: Number, required: true },
    poids: { type: Number, required: true },
    taille: { type: String, required: true },
    picture: { type: String, required: false, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Question_mark_alternate.svg/1200px-Question_mark_alternate.svg.png" },
    description: { type: String, required: true },
    background: { type: String, required: true },
    objectif: { type: String, required: true },
    job: { type: String, required: true },
    quote: { type: String, required: true },
    fightComportement: { type: String, required: true },
    equipement: { type: String, required: true },
    pnjLink: { type: String, required: true },
    author: { type: String, required: true },
    creationDate: { type: String, required: true },
    statistiques: {
        for: { type: Number, required: true },
        dex: { type: Number, required: true },
        vig: { type: Number, required: true },
        int: { type: Number, required: true },
        sag: { type: Number, required: true },
        cha: { type: Number, required: true }
    },
    likes: { type: Number, default: 0 },
    likedBy: [String]

});

module.exports = mongoose.model('npc', npcSchema);