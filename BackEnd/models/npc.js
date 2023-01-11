const mongoose = require('mongoose');

const npcSchema = mongoose.Schema({

    name: { type: String, required: true },
    univers: { type: String, required: true },
    race: { type: String, required: true },
    sexe: { type: String, required: true },
    age: { type: Number, required: true },
    poids: { type: Number, required: true },
    taille: { type: String, required: true },
    picture: { type: String, required: true },
    description: { type: String, required: true },
    background: { type: String, required: true },
    author: { type: String, required: true },
    statistiques: {
        for: { type: Number, required: true },
        dex: { type: Number, required: true },
        vig: { type: Number, required: true },
        int: { type: Number, required: true },
        sag: { type: Number, required: true },
        cha: { type: Number, required: true }
    }

});

module.exports = mongoose.model('npc', npcSchema);